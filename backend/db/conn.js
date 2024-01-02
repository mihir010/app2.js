const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/empData").then(()=>{
    console.log("connnected to db");
}).catch((err)=>{
    console.log("failed to connect to db: " + err);
});