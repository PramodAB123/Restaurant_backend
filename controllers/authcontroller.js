const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const registerController = async (req, res) => {
    try{
        const {username,email,password,Phone,usertype} = req.body;
        if(!username || !email || !password || !Phone){
            return res.status(400).json({message:"All fields are required"});
        }
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }
        const allowed = ['client','admin','vendor','driver'];
        const finalUsertype = allowed.includes(usertype) ? usertype : 'client';

        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            username,
            email,
            password:hashedPassword,
            Phone,
            usertype: finalUsertype
        });
        const safeUser = user.toObject();
        delete safeUser.password;
        return res.status(201).json({message:"User created successfully",user: safeUser});
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
const loginController = async (req, res) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User not found"});
        }
        const isPasswordCorrect = await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect){
            return res.status(400).json({message:"Invalid password"});
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.status(200).json({message:"Login successful",token});
        }
    
    catch(error){
        res.status(500).json({message:error.message});
    }
}


module.exports = { registerController ,loginController};

