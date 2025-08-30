require('dotenv').config();
const express=require('express');
const morgan = require('morgan');
const connectdb = require('./config/db');
const app=express();


connectdb();
app.use(morgan('dev'))
app.use(express.json())

app.get('/',(req,res)=>{
   return res.status(200).send("<h1>hello</h1>");
})

const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
})