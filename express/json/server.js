import http from 'http'
import express from 'express'
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'


const app=express();
app.use(express.json());



const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const filepath=path.join(__dirname,"db.json");

const readuser=()=>{
    const data= fs.readFileSync(filepath,"utf-8");
    return JSON.parse(data);

}
const writeuser=(user)=>{
    fs.writeFileSync(filepath,JSON.stringify(user));

}
app.get("/:id",(req,res)=>{
   
  const user = readuser();
  res.json(user)

});
// app.get("/:id",(req,res)=>{


// })


app.post("/",(req,res)=>{
    const user=readuser();
    user.push(req.body);
    writeuser(user);
    res.json({msg:"user inserted successfully"});



})
app.delete("/:id",(req,res)=>{
    let user = readuser();
    const id=req.params.id
   user= user.filter((u)=>u.id!=id)
   writeuser(user);
   res.json({msg:"user deleted successfully"});

})
app.listen(5000,()=>{
    console.log("server started");
})
