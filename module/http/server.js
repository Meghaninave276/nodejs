import { log } from 'console';
import http from 'http'
const port=4025;
const server=http.createServer((req,res)=>{
    if(req.url==="/")
    {
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("home page");

    }
    else if(req.url==="about")
    {
         res.writeHead(200,{"content-type":"text/plain"});
        res.end("about page");


    }
    else if(req.url==="service")
    {
         res.writeHead(200,{"content-type":"text/plain"});
        res.end("service page");


    }
    else if(req.url==="portfolio")
    {
         res.writeHead(200,{"content-type":"text/html"});
         res.end(`
    <h1 style="color: purple;">Welcome Boss!</h1>
    <p>This page is served using Node.js</p>
  `);

    }
    
    else
    {
        res.end("404 page not found");
    }

});
server.listen(port,()=>{
    console.log(`your server is started on http://localhost:${port}/`);
})