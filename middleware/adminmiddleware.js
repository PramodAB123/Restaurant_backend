const userModel = require("../models/userModel");

const adminmiddleware=async(req,res,next)=>{
    try{
        const user=await userModel.findById(req.body.id);
        console.log(user.usertype);
        console.log("hii")
        if(user.usertype!=='admin'){
            return res.status(401).send({
                success:false,
                message:"only admin ffcan access"
            })
        }
        else{
            next();
        }
    }
    catch{
        return res.status(401).send({
            success:false,
            message:"only admin can access"
        })
    }
}
module.exports=adminmiddleware;