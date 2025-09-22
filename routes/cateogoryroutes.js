const express=require('express');
const router=express.Router();
const authMiddleware=require('../middleware/authMiddleware');
const {addcategory,getcategory,getcategorybyid,deletecategory,updatecategory}=require('../controllers/categorycontroller');

router.post('/addcategory',authMiddleware,addcategory);
router.get('/getcategorybyid/:id',authMiddleware,getcategorybyid);
router.get('/getcategory',authMiddleware,getcategory);
//router.get('/getcategorybyid/:id',authMiddleware,getcategorybyid);
router.delete('/deletecategory/:id',authMiddleware,deletecategory);
router.put('/updatecategory/:id',authMiddleware,updatecategory);

module.exports=router;