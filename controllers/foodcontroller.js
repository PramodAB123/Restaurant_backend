const Food = require('../models/foodmodel');
const orderModel = require('../models/orderModel');
const Restaurant = require('../models/restuarentmodel'); // Import restaurant model
const mongoose = require('mongoose');

const createAll = async (req, res) => {
    try {
        const { 
            title, 
            description, 
            price, 
            imageUrl, 
            foodTags, 
            cateogory, 
            code, 
            isAvailable, 
            restuarent, 
            Rating, 
            ratingCount 
        } = req.body;
        
        // Validation - Check required fields
        if (!title || !description || !price) {
            return res.status(400).json({
                message: "Title, description, and price are required fields"
            });
        }
        
        // Validate price is a number
        if (isNaN(price) || price <= 0) {
            return res.status(400).json({
                message: "Price must be a valid positive number"
            });
        }
   
        // Create the food item
        const food = await Food.create({
            title,
            description,
            price,
            imageUrl,
            foodTags,
            cateogory,
            code,
            isAvailable: isAvailable !== undefined ? isAvailable : true,
            restuarent,
            Rating: Rating || 5,
            ratingCount
        });

        // Populate restaurant data if restaurant ID was provided
        const populatedFood = await Food.findById(food._id).populate('restuarent');

        res.status(201).json({
            message: "Food created successfully",
            food: populatedFood
        });
        
    } catch (error) {
        console.error("Error creating food:", error);
        
        // Handle specific MongoDB errors
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                message: "Validation error",
                details: Object.values(error.errors).map(err => err.message)
            });
        }
        
        if (error.name === 'CastError') {
            return res.status(400).json({
                message: "Invalid data format",
                details: error.message
            });
        }
        
        res.status(500).json({
            message: "Internal server error",
            error: process.env.NODE_ENV === 'development' ? error.message : "Something went wrong"
        });
    }
}
const getfoodController=async(req,res)=>{
    try{
        const data=await Food.find();
        if(!data){
            return res.json({
                "message":"error nofood found"
            })
        }
        return res.json({
            data
        })

    }
    catch{
        return res.json({
            "message":"error nofood found"
        })
    }
}
const getsinglefoodcontroller=async(req,res)=>{
    try{
        const foodId=req.params.id;
        if(!foodId){
            res.status(500).send({
                "message":"error in finding"
            })
        }
        const food=await Food.findById(foodId);
        if(!food){
           return res.status(500).send({
            "message":"error in finding"
        }) 
        }
        res.status(200).send({
            food
        })
    }
    catch{
        console.log("error");
        res.status(500).send({
            "message":"error in finding"
        })

    }
}

const getbyresturentid=async(req,res)=>{
    try{
        const resid=req.params.id;
        const restuarentdata=await Food.find({
            restuarent:resid
        })
        if(!restuarentdata){
            console.log("error");
            res.status(500).send({
                "message":"error in finding restuarent"
            })
        }
        res.status(200).send({
            restuarentdata
        })
    }

    catch{
        console.log("error");
            res.status(500).send({
                "message":"error in finding restuarent"
            })
    }
}
const updatefood = async (req, res) => {
    try {
        const foodId = req.params.id;
        const updateData = req.body;

        // Find the food by ID and update it with new data
        const updatedFood = await Food.findByIdAndUpdate(
            foodId,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedFood) {
            return res.status(404).send({
                message: "Food item not found"
            });
        }

        res.status(200).send({
            message: "Food updated successfully",
            food: updatedFood
        });
    } catch (error) {
        console.error("Error updating food:", error);
        res.status(500).send({
            message: "Error updating food"
        });
    }
}
const deletefood = async (req, res) => {
    try {
        const id = req.params.id;
        const presentfood = await Food.findById(id);
        if (!presentfood) {
            return res.status(404).send({
                message: "Food item not found"
            });
        }
        await Food.findByIdAndDelete(id);
        res.status(200).send({
            message: "Food deleted"
        });
    } catch (error) {
        console.error("Error deleting food:", error);
        res.status(500).send({
            message: "Error deleting food"
        });
    }
}
const placorderfunction=async(req,res)=>{
    try{
        const {cart}=req.body;
        let total=0;
        if(!cart) {
            res.status(500).send({
                "message": "error"
            });
        }
        cart.map(i=>{
            total+=i.price
        });
        const newOrder=await orderModel({
            foods:cart,
            payment:total,
            buyer:req.user
        })
        console.log(req.user);
        //console.log(req.user._id);
        res.status(200).send({
            message:"order placed ",
            newOrder
        })
    }
    catch(error){
        console.log("error")
        res.status(500).send({
            message: error
        });
    }
}
const changeorderstatus=async(req,res)=>{
    try{
        const orderId=req.params.id;
        if(!orderId){
            res.status(200).send({
                message:"please provide valid order id"
            })
        }
        const {status}=req.body;
        const order=await orderModel.findByIdAndUpdate(orderId,{status},{new:true});
        res.status(200).send({
            message:"success"
        })
    }
    catch(error){
        return res.status(500).send({
            message:error
        })
    }
}
module.exports = {
    createAll,getfoodController,getsinglefoodcontroller,getbyresturentid,updatefood,deletefood,placorderfunction,
    changeorderstatus
}