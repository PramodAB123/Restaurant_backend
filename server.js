const express=require('express');
const morgan = require('morgan');
const app=express();

app.use(morgan('dev'))
app.use(express.json())

app.get('/',(req,res)=>{
   return res.status(200).send("<h1>hello</h1>");
})

const PORT=8080;
app.listen(PORT,()=>{
    console.log(`App is running ${PORT}`);
})