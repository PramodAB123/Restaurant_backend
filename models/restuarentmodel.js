const mongoose=require('mongoose');

const restuarentSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'the title is required']
    },
    imageurl:{
        type:String,
        required:[true,'the imageurl is required']
    },
    foods:{
        type:Array,
        required:[true,'the foods is required']
    },
    time:{
        type:String,
    },
    pickup:{
        type:Boolean,
        required:[true,'the pickup is required']
    },
    delivery:{
        type:Boolean,
        required:[true,'the delivery is required']
    },
    isOpen:{
        type:Boolean,
        required:[true,'the isOpen is required']
    },  
    logoUrl:{
        type:String,
        required:[true,'the logoUrl is required']
    },
    rating:{
        type:Number,
        required:[true,'the rating is required'],
        min:1,
        max:5
    },
    ratingCount:{
        type:Number,
        required:[true,'the ratingCount is required']
    },
    address:{
        type:String,
        required:[true,'the address is required']
    },
    code:{
        type:String,
        required:[true,'the code is required']
    },
    coords:{
        type:String,
        latitude:{
            type:Number,
           // required:[true,'the latitude is required']
        },
        longitude:{
            type:Number,
          //  required:[true,'the longitude is required']
        },
        latitudeDelta:{
            type:Number,
           // required:[true,'the latitudeDelta is required']
        },
        longitudeDelta:{
            type:Number,
          //  required:[true,'the longitudeDelta is required']
        },
        address:{
            type:String,
            
        },
        title:{
            type:String,
            
        },
    }
    }
    

,{timestamps:true})

module.exports=mongoose.model("restuarent_user",restuarentSchema);