const express=require('express')
const { registerController, loginController } = require('../controllers/authcontroller')
const router=express.Router();

router.post('/register', registerController).post('/login', loginController)

module.exports=router   