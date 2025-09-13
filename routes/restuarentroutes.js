const express = require('express');
const { addrestuarent,getrestuarent,getrestuarentbyid } = require('../controllers/restuarentcontroller');
const authMiddleware = require('../middleware/authMiddleware');
const router=express.Router();


router.post('/addrestuarent',authMiddleware,addrestuarent)
router.get('/getrestuarent',authMiddleware,getrestuarent)
router.get('/getrestuarentbyid/:id',authMiddleware,getrestuarentbyid)
module.exports=router;