require('dotenv').config();
const express=require('express');
const morgan = require('morgan');
const connectdb = require('./config/db');
const app=express();
const authRoutes=require('./routes/authRoutes')
const userRoutes=require('./routes/userRoutes')
const restuarentRoutes=require('./routes/restuarentroutes')
const categoryRoutes=require('./routes/cateogoryroutes');
connectdb();
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // if sending form data
app.get('/',(req,res)=>{
   return res.status(200).send("<h1>hello</h1>");
})
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/user',userRoutes);
app.use('/api/v1/restuarent',restuarentRoutes);
app.use('/api/v1/category',categoryRoutes);
console.log(process.env.PORT)
const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
})