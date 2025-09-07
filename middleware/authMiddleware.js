const jwt=require('jsonwebtoken');
module.exports=async(req,res,next)=>{
    try {
        const token=req.headers.authorization.split(' ')[1];
        if(!token){
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { _id: decoded.id }; 
        console.log(req.user);
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
}