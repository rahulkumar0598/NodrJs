
const mongoose=require("mongoose");
var schema=new mongoose.Schema({
    id:{
        type:Number,
        unique:true

    },
    rollNo:{
        type:Number,
        unique:true,
    },

    name:String,
    physic:Number,
    math:Number,
    hindi:Number,
    english:Number,
    science:Number,
    status:String

})
const studentDb=mongoose.model('studentDb',schema);

module.exports=studentDb;
