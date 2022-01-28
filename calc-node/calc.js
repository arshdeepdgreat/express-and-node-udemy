// jshint esversion:6
const express = require ("express")
const parser = require ("body-parser")

const app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){
    res.send("Thanks for posting")
})

app.listen(3000,function(){
    console.log("Server is running at 3000")
})
