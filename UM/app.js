require('dotenv').config();
const express=require("express");
const dotenv=require("dotenv");
const morgan=require("morgan");
const app=express();
const path=require("path");
const PORT=process.env.PORT||80
dotenv.config({path:'config.env'})
const connectDB=require("./server/database/connection");
var cookieParser = require('cookie-parser');

//log request
app.use(morgan('tiny'));

//MongoDB connectDB
connectDB();

//cookie as middelware
app.use(cookieParser());

app.use(express.json());
//get data from the form to server
app.use(express.urlencoded({
    extended: true
}));


//view engine
app.set("view engine","ejs");
// app.set("views",path.resolve(__dirname,"views/ejs"))

// load static folders
app.use('/css',express.static(path.resolve(__dirname,"static/css")));
app.use('/js',express.static(path.resolve(__dirname,"static/js")));

// load routers
app.use('/',require('./server/routes/loginRouter'));
app.use('/',require('./server/routes/teacherRouter'));
app.use('/',require('./server/routes/studentRouter'));

app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/contactUs',(req,res)=>{
    res.render('contactUs');
});


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});