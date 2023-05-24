const express = require("express");
const User = require('./schema/portfoliousers')
const UserMessage = require('./schema/portfoliousersmessage')
const bcrypt = require("bcryptjs");
const app = express();
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
require("./db/db")
app.get("/",(req,res)=>{
    res.send("server");
})
app.post("/message",async (req,res)=>{
    const {email,phone,message} = req.body;
    if(!email || !phone || !message){
        res.sendStatus(400);
    }
    else{

        const newMessage =await UserMessage.create({email,phone,message});
        res.send(newMessage)
    }

})
app.post('/register',async (req,res)=>{
    const {firstname,lastname,email,password,confirmpassword} = req.body;
    const oldUser =await User.findOne({email});
    if(oldUser){
        res.sendStatus(400);
    }
    else{

        if (!firstname || !lastname || !email || !password || !confirmpassword) {
            res.sendStatus(401);
    }
    else{
        if(password !== confirmpassword){
            res.sendStatus(404);
        }
        else{
            const hashpassword =await bcrypt.hash(password,12);
            const hashconfirmpassword =await bcrypt.hash(confirmpassword,12);
                const newUser =await User.create({firstname,lastname,email,password:hashpassword,confirmpassword:hashconfirmpassword});
                res.send(newUser);
        }
    }
    
}
})
app.listen(PORT,()=>{
    console.log("listening at 8000");
})