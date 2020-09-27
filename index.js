const express=require('express')
const app=express()
const mongoose=require('mongoose')
const {MONGOURI} = require('./key.js')
const students=mongoose.model('./models/model')
mongoose.connect(MONGOURI,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:true})
mongoose.connection.on("connected",()=>{
    console.log("connected to mongodb")
})
mongoose.connection.on("error",()=>{
    console.log("Error with dbconn")
})
app.get('/',(req,res)=>{
    console.log("hello world")
})
app.post('/add',async(req,res)=>{
    await students.create({name:"sasi",age:18})
})
const port=8080
app.listen(port,()=>{
    console.log("8080 port is working")
})