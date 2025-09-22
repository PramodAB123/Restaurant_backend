const Category = require('../models/categorymodel');
const addcategory = async (req, res) => {
    try {
        const {title,imageUrl} = req.body;
        const category = await Category.create({title,imageUrl});
        res.status(201).json({message:"Category created successfully",category});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
const getcategory = async (req, res) => {
    try {
        const category = await Category.find();
        res.status(200).json({message:"Category fetched successfully",category});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
const getcategorybyid = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findById(id);
        res.status(200).json({message:"Category fetched successfully",category});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
const deletecategory = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findByIdAndDelete(id);
        res.status(200).json({message:"Category deleted successfully",category});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
const updatecategory=async(req,res)=>{
    try{
        const {id}=req.params;
        const {title,imageUrl}=req.body;
        const updatecat=await Category.findByIdAndUpdate(id,{title,imageUrl},{new:true});
        if(!updatecat){
            res.send(401).json({
                messgae:"no cat found"
            })
        }
    }
    catch{
        res.send(401).json({
            messgae:"no cat found"
        })
    }
}
module.exports = { addcategory,getcategory,getcategorybyid ,deletecategory,updatecategory};