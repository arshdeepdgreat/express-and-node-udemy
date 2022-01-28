// jshint esversion:6
const express = require ("express");

const app = express();

app.get("/",function(req,res){
    res.send("hello world")
})

app.listen(3000,function(){
    console.log("Server is running at 3000")
})
