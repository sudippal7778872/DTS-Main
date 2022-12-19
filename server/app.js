const mongoose = require("mongoose")
const express = require("express");
const app = express();
require("dotenv").config();
var cors = require('cors')
const PORT = process.env.PORT;

// database
require("./db/index")

// converting data json to object form. else unable to understand the data.
app.use(express.json())

// access origin error
app.use(cors())


// linking router files
app.use(require("./src/router/userRoute"))
app.use(require("./src/router/careerRoute"))
app.use(require("./src/router/locationRoute"))



// middleware
const middleware = (req, res, next) =>{
    console.log("this is my middleware")
    next()
}



app.get("/",(req,res)=>{
    res.status(200).send("welcome to our MERN project");
})
app.get("/about", middleware, (req,res)=>{
    res.status(200).send("welcome to our about");
})

app.get("/contact",(req,res)=>{
    res.status(200).send("this is contact page")
})
app.get("/signin",(req,res)=>{
    res.status(200).send("this is login page")
})
app.get("/signup",(req,res)=>{
    res.status(200).send("this is sign in page")
})

app.listen(PORT,(err)=>{
    if(err){
        console.log("error occured", err)
    }
    console.log("server listening on port",PORT)
})