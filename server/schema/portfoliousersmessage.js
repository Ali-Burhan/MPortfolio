const mongoose = require("mongoose");

const UsersMessage = mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
})

const UserMessage = new mongoose.model("PORTFOLIOUSERSMESSAGE",UsersMessage);

module.exports = UserMessage;