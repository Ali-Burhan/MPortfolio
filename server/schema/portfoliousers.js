const mongoose = require("mongoose");

const Users = mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    confirmpassword:{
        type:String,
        required:true,
    },
})

const User = new mongoose.model("PORTFOLIOUSERS",Users);

module.exports = User;