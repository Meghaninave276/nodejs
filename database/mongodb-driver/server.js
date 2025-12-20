import {MongoClient} from 'mongodb'
import express from 'express'


const app=express();
app.use(express.json());



const client=new MongoClient("mongodb://127.0.0.1:27017");

const connectdb=async()=>{
   await client.connect();

   console.log("monogdb connected");
   const db= client.db("school");
   return db;

}

const addstud=async()=>{
    const db = await connectdb();
  const result = await db.collection("primary").insertOne({
        name:"megha",
        age:5,
        standard:1
    })
    return result;
}


const readstud=async()=>{
    const db=await connectdb();
    const data = await db.collection("primary").find().toArray();
    // console.log("primary",data);
    return data;

}
const updatestud=async(name,age)=>{
    const db= await connectdb();
    const udata=await db.collection("primary").updateOne(
       { name},
       {$set:{age}}

    )
    return udata;
}

const deletestud=async(name)=>{
    const db= await connectdb();
    const ddata=await db.collection("primary").deleteOne(
        {name}
        

    )
    // console.log(ddata);
    return ddata;

}
// addstud();
// readstud();

app.get("/api",async(req,res)=>{
    const data=await readstud();
    res.json(data);


});

app.post("/api",async(req,res)=>{
    const result=await addstud();
     res.json({msg:"data insered",
       id: result.insertedId,
     });

})

app.put("/api",async(req,res)=>{
    const {name,age}=req.body
    const udata=await updatestud(name,age);
    res.json({msg:"data updated",
     modifiedCount: udata.modifiedCount,
    });
 
    
})

app.delete("/api",async(req,res)=>{
    const {name}=req.body;
    const ddata=await deletestud(name);
    res.json({msg:"data deleted",
         deletedCount: ddata.deletedCount,
    })
    

})
app.listen(4560,()=>{
    console.log("server started");
   
})