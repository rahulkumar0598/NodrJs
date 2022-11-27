const { application } = require("express");
const express=require("express")
const route=express.Router();//this will help to create route in different file
const teacherController=require("../Controller/teacherController");

//register
route.post("/register",teacherController.register);
//login

route.post("/teacherLogin",teacherController.login);



module.exports=route;
