const express=require('express');
const router=express.Router();
const authMiddleware=require('../middleware/authMiddleware');
const {
    createAll,getfoodController,getsinglefoodcontroller,getbyresturentid,updatefood,deletefood,placorderfunction
}=require('../controllers/foodcontroller');

// Create food
router.post('/create', authMiddleware, createAll);

// Get all foods
router.get('/all', getfoodController);

router.get('/get/:id',getsinglefoodcontroller)

router.get('/getByresturent/:id',getbyresturentid)

router.put('/updatefood/:id',updatefood)
router.delete('/deletefood/:id',deletefood)

router.post('/placeorder',authMiddleware,placorderfunction)
module.exports=router;