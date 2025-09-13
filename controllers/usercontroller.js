const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const getuser = async (req, res) => {
    try {
        if(!req.user || !req.user._id){
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const user = await User.findById(req.user._id);
        user.password = undefined;
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const updateuser = async (req, res) => {
    try {
        // The 'new: true' option makes findByIdAndUpdate return the updated document instead of the original one
        const user = await User.findById(req.user._id);
        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }
        const {username,email,Phone,address,profile} = req.body;
        if(username) user.username = username;
        if(email) user.email = email;
        if(Phone) user.Phone = Phone;
        if(address) user.address = address;
        if(profile) user.profile = profile;
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const updatePassword = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }
        const {oldPassword,newPassword} = req.body;
        if(oldPassword){
            const isPasswordCorrect = await bcrypt.compare(oldPassword,user.password);
            if(!isPasswordCorrect){
                return res.status(400).json({ message: 'Invalid old password' });
            }
        }
        if(newPassword){
            user.password = await bcrypt.hash(newPassword,10);
            await user.save();
            res.status(200).json({ message: 'Password updated successfully' });
        }
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}
const deleteuser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'User deleted successfully' });
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}
module.exports = { getuser, updateuser, updatePassword,deleteuser };