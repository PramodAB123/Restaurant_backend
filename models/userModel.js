const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,'the username is required']
    },
    email:{
        type:String,
        required:[true,'the email is required']
    },
    password:{
        type:String,
        required:[true,'the passowrd required']
    },
    address:{
        type:Array
    },
    Phone:{
        type:Number,
        required:[true,'the number required']
    },
    usertype:{
        type:String,
       required:[true,'the usertype is required'],
        default:'client',
        enum:['client','admin','vendor','driver']
    },
    profile:{
        type:String,
        default:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9IUW9QQRx9V81XVtoatQ-Qq-tKh1yN0ftYA&s'
    },
},{timestamps:true})

module.exports=mongoose.model("restuarent_user",userSchema);