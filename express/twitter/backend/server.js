import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'


const app=express();
app.use(cors());
app.use(express.json());


const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const filepath=path.join(__dirname, "two.json");

const readuser=()=>{
  const data =  fs.readFileSync(filepath,"utf-8");
    return JSON.parse(data)
}

const writeuser=(user)=>{
    fs.writeFileSync(filepath,JSON.stringify(user,null,2))

}

app.get("/",(req,res)=>{
    const user=readuser();
    res.json(user);
    

})

app.post("/",(req,res)=>{
    const user=readuser();
    user.push(req.body);
    writeuser(user);
    res.json({msg:"data inserted successfully!"});
})

app.put("/:id",(req,res)=>{
   
    const body=req.body;
     let user=readuser();
   user=user.map((u)=>u.id===body.id?body:u);
   writeuser(user)
   res.json({msg:"data updated"});
 
})
app.delete("/:id", (req, res) => {
  let user = readuser();
  const id = Number(req.params.id);

  user = user.filter(u => u.id != id);
  writeuser(user);

  res.json({ msg: "data deleted" });
})




app.listen(3400,()=>{
    console.log("server started");
})