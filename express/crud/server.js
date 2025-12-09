import express from 'express'
const app=express();
app.use(express.json());
app.get("/api",(req,res)=>{
    res.json({msg:"home page open succesfully"});
})
app.listen(1563,()=>{
    console.log("server started");
})