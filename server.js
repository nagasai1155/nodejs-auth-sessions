const express = require('express');
const dotenv = require('dotenv');  
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const employeeroutes = require('./routes/employeeroutes');
const ejs = require('ejs');
//mongodb 
//const{MongoClient} = require('mongodb');
const app = express();
const port = process.env.port || 4600;
//it is global object
dotenv.config()
//authetication 

app.set("view engine","ejs");
app.get('/grapes',(req,res)=>{
    res.render('samplepage');
})
app.use(bodyparser.json());
mongoose.connect(process.env.MONGO_URI).
then(()=>{
    console.log('connected mongodb succesfully');
})
.catch((err)=>{
    console.log(err);
})

app.use('/employee',employeeroutes);
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})

