const mongoose = require("mongoose");
const DB= process.env.DB


mongoose.connect(DB)
.then((res)=>{
    console.log("DB connected successfully");
})
.catch((err)=>{
    console.log("error occurend in DB connection",err)
})
