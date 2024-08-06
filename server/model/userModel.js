const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    otp: {
        type: String
    }
});

const userModel = new mongoose.model("userModel", userSchema);

module.exports = userModel;