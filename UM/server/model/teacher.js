const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const mongoose=require("mongoose");
var teachSchema=new mongoose.Schema({
    id:{
        type:Number,
        unique:true

    },
    email:{
        type:String,
        unique:true,
        required:true

    },
    password:{
        type:String,
        required:true

    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
    
})
teachSchema.methods.generateAuthToken=async function(){
    try{
        const token=jwt.sign({_id:this._id.toString()},process.env.SECURE_KEY);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token
    }catch(error){
        res.send("error");
        console.log("error");
    }
}
const teacherDb=mongoose.model('teacherDb',teachSchema);

module.exports=teacherDb;