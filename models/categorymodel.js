const mongoose=require('mongoose');

const categorydata=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required"]
    },
    imageUrl:{
        type:String,
      //  required:[true,"image is required"],
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9IUW9QQRx9V81XVtoatQ-Qq-tKh1yN0ftYA&s"
    }
},
{
    timestamps:true
});

module.exports=mongoose.model("categorydata",categorydata);