const jwt=require("jsonwebtoken");
const teacherDb=require("../model/teacher");
module.exports=async(req,res,next)=>{
    try{
        const token=req.cookies.jwt;
        const verify=jwt.verify(token,process.env.SECURE_KEY);
        console.log(verify)
        const user=await teacherDb.findOne({_id:verify});

        req.token=token;
        res.user=user;
        next();
        

    }
    catch(error){
        return res.status(400).send({message:error.message});
    }

}
