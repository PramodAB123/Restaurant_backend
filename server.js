require('dotenv').config();
const express=require('express');
const morgan = require('morgan');
const connectdb = require('./config/db');
const app=express();
const authRoutes=require('./routes/authRoutes')

connectdb();
app.use(morgan('dev'))
app.use(express.json())

app.get('/',(req,res)=>{
   return res.status(200).send("<h1>hello</h1>");
})
app.use('/api/v1/auth',authRoutes)
console.log(process.env.PORT)
const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
})