const express = require('express');
const { addrestuarent,getrestuarent,getrestuarentbyid,deleterestuarent } = require('../controllers/restuarentcontroller');
const authMiddleware = require('../middleware/authMiddleware');
const router=express.Router();


router.post('/addrestuarent',authMiddleware,addrestuarent)
router.get('/getrestuarent',authMiddleware,getrestuarent)
router.get('/getrestuarentbyid/:id',authMiddleware,getrestuarentbyid)
router.delete('/deleterestuarent/:id',authMiddleware,deleterestuarent)
module.exports=router;