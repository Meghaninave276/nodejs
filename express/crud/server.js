import express from 'express'
const app=express();
app.use(express.json());
let users=[
    {
        "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    },
    {
        "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    },
    {
        "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    },
    {
        "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    }
];
//Get
    app.get("/api",(req,res)=>{
        res.json(users);

    })
//Post
app.post("/api",(req,res)=>{
    users.push(req.body);
    res.json({msg:"users inserted successfully!",users});
})
//Put
app.put("/api",(req,res)=>{
    const body=req.body;
    users=users.map((user)=>{
        if(user.id==body.id)
        {
          return body;

        }
        return user;
});
res.json({msg:"user updated sucessfully!",users});

})
//Delete
app.delete("/api",(res,req)=>{
    users = users.filter((user)=>user.id != req.query.id);
    res.json({msg:"user deleted sucessfully!",users});


})
app.listen(1563,()=>{
    console.log("server started");
})