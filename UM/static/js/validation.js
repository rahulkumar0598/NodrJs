const { name } = require("ejs");

function validation(){
    var rollNo =document.getElementById('rollNo').value;
    var user =document.getElementById('name').value;
    var physic =document.getElementById('physic').value;
    var math =document.getElementById('math').value;
    var english =document.getElementById('english').value;
    var hindi =document.getElementById('hindi').value;
    var science =document.getElementById('science').value;
    var status =document.getElementById('status').value;
    if (rollNo==""){
        document.getElementById("ROLLNO").innerHTML="***Please fill marks of ROLLNO***";
        return false;
    }
    if (rollNo<0||rollNo>1000){
        document.getElementById("ROLLNO").innerHTML="***Please write value in limits***";
        return false;
    }
    if (user==""){
        document.getElementById("NAME").innerHTML="***Please fill the user name***";
        return false;
    }
    if ((user.length<=2) ||(user.length>20)){
        document.getElementById("NAME").innerHTML="***Name lenght must be between 2 to 20***";
        return false;
    }
    if (!isNaN(user)){
        document.getElementById("NAME").innerHTML="***Name not be a number***";
        return false;
    }
    if (physic==""){
        document.getElementById("PHYSIC").innerHTML="***Please fill marks of physic***";
        return false;
    }
    
    if (isNaN(physic)){
        document.getElementById("PHYSIC").innerHTML="***Marks should be a number***";
        return false;
    }
    if (physic<0 || physic>100){
        document.getElementById("PHYSIC").innerHTML="***Marks lie between 0 to 100***";
        return false;
    }
    if (math==""){
        document.getElementById("MATH").innerHTML="***Please fill marks of math***";
        return false;
    }
    if (isNaN(math)){
        document.getElementById("MATH").innerHTML="***Marks should be a number***";
        return false;
    }
    if (math<0 || math>100){
        document.getElementById("MATH").innerHTML="***Marks lie between 0 to 100***";
        return false;
    }
    if (english==""){
        document.getElementById("ENGLISH").innerHTML="***Please fill marks of english***";
        return false;
    }
    if (isNaN(english)){
        document.getElementById("ENGLISH").innerHTML="***Marks should be a number***";
        return false;
    }
    if (english<0 || english>100){
        document.getElementById("ENGLISH").innerHTML="***Marks lie between 0 to 100***";
        return false;
    }
    if (hindi==""){
        document.getElementById("HINDI").innerHTML="***Please fill marks of hindi***";
        return false;
    }
    if (isNaN(hindi)){
        document.getElementById("HINDI").innerHTML="***Marks should be a number***";
        return false;
    }
    if (hindi<0 || hindi>100){
        document.getElementById("HINDI").innerHTML="***Marks lie between 0 to 100***";
        return false;
    }
    if (science==""){
        document.getElementById("SCIENCE").innerHTML="***Please fill marks of science***";
        return false;
    }
    if (isNaN(science)){
        document.getElementById("SCIENCE").innerHTML="***Marks should be a number***";
        return false;
    }
    if (science<0 || science>100){
        document.getElementById("SCIENCE").innerHTML="***Marks lie between 0 to 100***";
        return false;
    }
    if (status==""){
        document.getElementById("STATUS").innerHTML="***Please fill marks of status***";
        return false;
    }
    if (!isNaN(status)){
        document.getElementById("STATUS").innerHTML="***Name not be a number***";
        return false;
    }
   
}
$("#addUser").submit(function(event){
    alert("Data inserted Successfully")
})