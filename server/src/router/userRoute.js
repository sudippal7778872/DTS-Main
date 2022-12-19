const express = require("express");
const Router = express();
require("../../db/index")
const bcrypt = require("bcrypt")
const User = require("../model/userSchema")

Router.get("/", (req, res) => {
    res.status(200).send("welcome from router")
})

// using promise
// Router.post("/register",(req,res)=>{
//     const { firstname ,email ,phone ,work , password ,cpassword } = req.body;
//     if(!firstname  || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).send({error: "please fill all the field"})
//     }
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//         return res.status(422).send({error: "user already exist"})
//         }
//     const user = new User({firstname ,email ,phone ,work , password ,cpassword})
//     user.save()
//     .then((response)=>{
//         res.status(201).send({message: "user register successfully"})
//     })
//     .catch((error)=>{
//         res.status(500).json({error: error.message})
//     })
// }).catch(err=> console.log(err))

// })


// using async await
Router.post("/register", async (req, res) => {
    const { firstname, email, phone, work, password, cpassword } = req.body;
    if (!firstname || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).send({ error: "please fill all the field" })
    }
    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(201).send({ error: "user already exist" })
        } else if (password != cpassword) {
            return res.status(422).send({ error: "user already exist" })
        } else {
            const user = new User({ firstname, email, phone, work, password, cpassword })
            await user.save();
            return res.status(200).send("user register successfully")
        }


    } catch (err) {
        console.log(err)
    }
})


// login
//condition  1. check field empty or not. 2. email exist or not 3. password correct or not.
Router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "please fill all the fields" })
    }
    const userLogin = await User.findOne({ email: email })
    // console.log(userLogin)
    if (userLogin) {
        const isMatch = await bcrypt.compare(password,userLogin.password)
        const tokenNumber = await userLogin.generateAuthToken()
        console.log(tokenNumber)
        if (isMatch) {
            res.status(200).json({ message: "user logged in" })
        } else {
            return res.status(201).json({ error: "invalid user" })
        }
    } else {
        return res.status(201).json({ error: "Invalid user" })
    }
})

module.exports = Router;