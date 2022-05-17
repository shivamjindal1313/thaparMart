const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
});


//now we need to create a collections

const login = new mongoose.model("Login", loginSchema);

module.exports = login;


