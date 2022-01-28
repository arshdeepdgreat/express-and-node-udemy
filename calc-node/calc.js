// jshint esversion:6
const express = require ("express")
const bodyParser = require ("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.get("/bmi",function(req,res){
    res.sendFile(__dirname+"/bmiCalc.html")
})
app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var ans=num1+num2;
    res.send("Answer is : "+ ans)
})

app.listen(3000,function(){
    console.log("Server is running at 3000")
})
