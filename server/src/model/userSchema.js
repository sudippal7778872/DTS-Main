const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
    },
    work: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }]
})





//hasing password and confirm password

userSchema.pre('save', async function (next) {
    console.log("hello middleware")
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
})



// generating JWT token
userSchema.methods.generateAuthToken = async function () {
    try {
        let tokenNumber = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({ token: tokenNumber })
        await this.save();
        return tokenNumber
    } catch (err) {
        console.log(err)
    }
}




// create model

const User = mongoose.model("user", userSchema)

module.exports = User;