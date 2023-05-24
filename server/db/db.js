const mongoose = require("mongoose");
mongoose.connect(process.env.MONGOURI).then(()=>{console.log("connected");}).catch((err)=>{console.log(err);})