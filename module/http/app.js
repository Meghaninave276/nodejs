import http from "http";
import fs from 'fs'
const server=http.createServer((req,res)=>{
   
   
const date=new Date();
 const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

    res.writeHead(200,{"content-type":"text/plain"});
    fs.writeFileSync("logger.txt",`Request received at: ${formattedDate}\n`);
    fs.appendFileSync("logger.txt",`\n A reuest comes on server at: ${formattedDate}\n`);

   res.end("hello world"); 
})
server.listen(4540,()=>{
    console.log("server started");
})