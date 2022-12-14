const express=require('express');
const app=express();
const mongoose=require('mongoose');
const DB='mongodb+srv://aman123:aman123@cluster0.6venwv5.mongodb.net/yogaform?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);
mongoose.connect(DB,{
    
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>console.log("No connection"));

app.get('/',(req,res)=>{
    res.send("hello world");
});


app.listen(3000,()=>{
    console.log("running");
})