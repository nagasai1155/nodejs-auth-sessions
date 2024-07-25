const mongoose = require('mongoose');

//used for the making schema in mongodb for storing collections
const employeeschema = new mongoose.Schema({
    //name,email,phone,city
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },phone:{
        type:Number,
        default:false
    },city:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("Employee",employeeschema);

