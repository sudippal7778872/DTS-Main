const mongoose = require("mongoose");

const careerSchema = mongoose.Schema({
    Title:{
        type: String,
        required:true,
    },
    FirstName: {
        type: String,
        required:true,
    },
    MiddleName: {
        type: String,
        required:true,
    },
    LastName: {
        type: String,
        required:true,
    },
    Department: {
        type: String,
        required:true,
    },
    Designation: {
        type: String,
        required:true,
    },
    Supervisor: {
        type: String,
        required:true,
    },
    DateOfJoining: {
        type: Date,
        required:true,
    },
    Email: {
        type: String,
        required: true,
    },
    Cell: {
        type: Number,
        required: true,
    },
})

// create model

const Career = mongoose.model("career",careerSchema)

module.exports = Career;
