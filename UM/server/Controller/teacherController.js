const express=require("express");
const app=express();
var studentDb = require("../model/student");
var teacherDb = require("../model/teacher");
const bcrypt = require('bcrypt');
var cookieParser = require('cookie-parser');
app.use(cookieParser());

// Create  and save new Student
exports.create = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content cannont be empty" });
        return;
    }
    const add = new studentDb({
        rollNo: req.body.rollNo,
        name: req.body.name,
        physic: req.body.physic,
        math: req.body.math,
        hindi: req.body.hindi,
        english: req.body.english,
        science: req.body.science,
        status: req.body.status
    })
    //save user in database
    add
        .save(add)
        .then(data => {
            // res.send(data)
            res.redirect("/addStudent")
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Undefined Error" });
        });

}



//Delete a user with specified user id
exports.delete = (req, res) => {
    const id = req.params.id;
    studentDb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: 'Cannont Delete' });
            }
            else {
                res.redirect("/viewall");
                // res.send({ message: "User Deleted Succesfully" });
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Message cannont delete" });
        });
}
/**
 * Register
 */
exports.register =async (req, res, next) => {
    if (!req.body) {
        res.status(400).send({ message: "Content cannont be empty" });
        return;
    }
    const teach = new teacherDb({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })
    const token=await teach.generateAuthToken();
    // adding cookie
    res.cookie("jwt",token,{
        expires:new Date(Date.now()+60000),
        httpOnly:true
        // secure:true
    });
    //save user in database
    teach
        .save(teach)
        .then(data => {
            res.send(data)
            // res.redirect("/")
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Undefined Error" });
        });
}


/**
 * Login
 */
// exports.login = (req,res,next)=>{
    
//     teacherDb.find({email:req.body.email})
//     .exec()
//     .then(u=>{
//         if(u.length<1){
//             res.status(401).send({message:"User not found"});
//         }
//         bcrypt.compare(req.body.password,u[0].password ,(err,r)=>{
//             if(!r){
//                 res.status(401).send({message:"Password not match"});
//             }
//             const token=jwt.sign({
//                 email:u[0].email
//             },
//             'Secret',
//             {
//                 expiresIn:'24hr'
//             }
//             );

//             res.redirect("viewall");
//         });
//     })
//     .catch(err=>{
//         res.status(500).send({message:err.message||"Undefined Error"})
//     })

// }
exports.login=async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;

        const userEmail=await teacherDb.findOne({email:email});
        const passwordMatch=await bcrypt.compare(password,userEmail.password);

        const token=await userEmail.generateAuthToken();
        console.log(token);
        //initializing cookie for 6 minutes 
        res.cookie("jwt",token,{
            expires:new Date(Date.now() + 360000),
            httpOnly:true
    
            // secure:true

        });

        if(passwordMatch){
            res.status(201).redirect("/viewall");
        }
        else{
            res.send("password are not match")
        }

    }catch(error){
        res.status(500).send({message:error.message||"Undefined Error"})
    }
}
exports.logouts=async(req,res)=>{
    try{
        res.clearCookie("jwt");
        res.redirect("/teacherLogin");
    }
    catch(error){
        res.send({message:error.message});
    }
}


