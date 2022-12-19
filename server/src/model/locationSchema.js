const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
    Name: {
        type: String,
        required:true,
    },
    State: {
        type: String,
        required:true,
    },
    AT: {
        type: String,
        required:true,
    },
    Property: {
        type: String,
    },
    Location: {
        type: String,
    },
    Taxes: {
        type: String,
    },
    Land: {
        type: String,
    },
})

// create model

const Location = mongoose.model("location",locationSchema)

module.exports = Location;
