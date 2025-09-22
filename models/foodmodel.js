const mongoose=require('mongoose');

const foodmodel= new mongoose.Schema(
    {
        title:{
            type:String,
            required:[true,'please enter the title']
        },
        description:{
            type:String,
            required:[true,'please enter the description']
        },
        price:{
            type:Number,
            required:[true,"please enter the price"]
        },
        imageUrl:{
            type:String
        },
        foodTags:{
            type:String
        },
        cateogory:{
            type:String
        },
        code:{
            type:String
        },
        isAvailable:{
            type:Boolean,
            default:true
        },
        restuarent:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Resturant'
        },
        Rating:{
            type:Number,
            default:5,
            min:1,
            max:5
        },        ratingCount:{
            type:String
        }
    },{
        timestamps:true
    }
)

module.exports=mongoose.model('Foodmodel',foodmodel);