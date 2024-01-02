const mongoose = require("mongoose");

const empSchema = mongoose.Schema({
    first_name:{
        type:String,
        required:true,
        trim:true,
        unique:false
    },
    last_name:{
        type:String,
        required:true,
        trim:true,
        unique:false
    },
    id:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    avatar:{
        type:String,
        required:false
    }
});

const empModel = mongoose.model("empData", empSchema);
module.exports = empModel;