const axios=require("axios")

exports.homeRoutes=(req,res)=>{
    res.render("teacherLogin");
}

exports.addStudent=(req,res)=>{
    //make get request
    res.render("addStudent");
}

exports.viewall=(req,res)=>{
    axios.get("http://localhost:80/api/users")
    .then(function(response){
        res.render("viewall",{user:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}
exports.editStudent=(req,res)=>{
    axios.get("http://localhost:80/api/users/",{params:{id:req.query.id}})
    .then(function(response){
        res.render("editStudent",{user:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}





