const express = require('express');
const { getuser, updateuser, updatePassword,deleteuser } = require('../controllers/usercontroller');
const authMiddleware = require('../middleware/authMiddleware');
const router=express.Router();


//GET USER
router.get('/getuser',authMiddleware,getuser)

router.put('/updateuser',authMiddleware,updateuser)

router.post('/updatePassword',authMiddleware,updatePassword)

router.delete('/deleteuser/:id',authMiddleware,deleteuser)
module.exports=router;