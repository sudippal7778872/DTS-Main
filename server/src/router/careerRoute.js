const express = require("express");
const Router = express();
require("../../db/index")
const Career = require("../model/careerSchema")

Router.get("/career", (req, res) => {
    console.log("came here")
    res.status(200).send("welcome from router")
})



// using async await
Router.post("/career", async (req, res) => {
    const { Title, FirstName, MiddleName, LastName, Department, Designation, Supervisor, DateOfJoining, Email, Cell } = req.body;
    if ( !Title || !FirstName || !LastName || !Department || !Designation || !Supervisor || !DateOfJoining || !Email || !Cell) {
        return res.status(422).send({ error: "please fill all the field" })
    }
    try {
        const userExist = await Career.findOne({ Email: Email })
        if (userExist) {
            return res.status(202).send({ error: "user already exist" })
        }
        const career = new Career({ Title, FirstName, MiddleName, LastName, Department, Designation, Supervisor, DateOfJoining, Email, Cell })
        await career.save();
        res.status(201).send("user register successfully")

    } catch (err) {
        console.log(err)
    }
})



module.exports = Router;