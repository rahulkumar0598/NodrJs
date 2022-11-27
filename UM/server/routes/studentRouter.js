const express=require("express")
const route=express.Router();//this will help to create route in different file

const services=require("../services/studentRender");//get services
const studentDb = require("../model/student");
const { Router } = require("express");


/**
 * @description Root Route
 * @method get
 */

route.get("/studentLogin",services.homeRoutes);

route.get("/studentview",services.studentview);


route.post("/studentLogin", async (req, res) => {

  const rollNo1 = req.body.rollNo;
  const individualStudent = await studentDb.findOne({rollNo : rollNo1});
  if(!individualStudent){
    res.render("studentLogin", {
      error : "Enter Valid Roll No"
    })
  }
  res.render("studentview", { one : individualStudent})
});


module.exports=route;

