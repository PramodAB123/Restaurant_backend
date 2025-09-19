const express = require('express');
const Resturant = require('../models/restuarentmodel');

const addrestuarent = async (req, res) => {
    try {
        const {title,imageUrl,foods,time,pickup,delivery,isOpen,logoUrl,rating,ratingCount,code,coords} = req.body;
        if(!title || !coords) return res.status(400).json({message:"please add title and adresss"});
        const restuarent = await Resturant.create({title,imageUrl,foods,time,pickup,delivery,isOpen,logoUrl,rating,ratingCount,code,coords});
        res.status(201).json({message:"Restuarent created successfully",restuarent});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
const getrestuarent = async (req, res) => {
    try {
        const restuarent = await Resturant.find();
        res.status(200).json({message:"Restuarent fetched successfully",restuarent});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
const getrestuarentbyid = async (req, res) => {
    try {
        const id = req.params.id;
        if(!id) return res.status(400).json({message:"please add id"});
        const restuarent = await Resturant.findById(id);
        res.status(200).json({message:"Restuarent fetched successfully",restuarent});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
const deleterestuarent = async (req, res) => {
    try {
        const id = req.params.id;
        if(!id) return res.status(400).json({message:"please add id"});
        const restuarent = await Resturant.findByIdAndDelete(id);
        res.status(200).json({message:"Restuarent deleted successfully",restuarent});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
module.exports = { addrestuarent,getrestuarent,getrestuarentbyid,deleterestuarent };