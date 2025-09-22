const mongoose=require('mongoose');

const oderSchema=new mongoose.Schema({
    foods:[
        {type:mongoose.Schema.Types.ObjectId,
            ref:"Foodmodel"

        }
    ],
    payment:{},
    buyer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"restuarent_user"
    },
    status:{
        type:String,
        enum:['preparing','prepared','on the way','deliverd'],
        default:'preparing',
    },
},
{
    timestamps:true
})
module.exports=mongoose.model("Orders",oderSchema);