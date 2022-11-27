const { Router, application } = require("express");
const express=require("express")
const route=express.Router();//this will help to create route in different file
const teacherController=require("../Controller/teacherController");
const studentDb = require("../model/student");
const checkAuth=require('../middleware/check-auth')

const services=require("../services/teacherRender");//get services
const { default: mongoose } = require("mongoose");

/**
 * @description  teacherLogin
 * @method get
 */

route.get("/teacherLogin",services.homeRoutes);
/**
 * @description addStudent
 * @method get
 */
route.get("/addStudent",checkAuth,services.addStudent);

/**
 * @description editStudent
 * @method get
 */
route.get("/editStudent/",checkAuth,services.editStudent);

/**
 * @description viewall
 * @method get
 */
route.get("/viewall",checkAuth,services.viewall);




/**
 * Registers
 */
// route.post("/teacherLogin", (req, res) => {
//     if(req.body.password == "asdf"&& req.body.email=="admin@gmail.com"){
//         res.redirect("/viewall");
//     }
//     else{
//         res.render("/teacherLogin", {
//             error : "Please Enter Correct Password !!"
//         })
//     }
// });

//API 
//create user
route.post("/api/user",teacherController.create);

//get all records in database
route.get("/api/users",(req,res)=>{
    if(req.query.id){
        const id=req.query.id;
        studentDb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not found"+id})
            }
            else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Error to retrive the data"});
        })

    }
    else{
        studentDb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message:err.message})
    })

    }
    
});
// Update database/Edit Database
route.put("/api/users/:id",(req,res)=>{
    if(!req.body)
    {
        return res
            .status(400)
            .send({message:"For update data ot be empty"})
    }
    const id=req.params.id;
    studentDb.findByIdAndUpdate(id,req.body.id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`User not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error fo update"})
    })
});

//delete database
route.delete("/api/user/:id",checkAuth,teacherController.delete);

/**
 * LogOut
 */
route.get("/logout",teacherController.logouts);


module.exports=route;
