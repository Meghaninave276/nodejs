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
app.get("/")

app.listen(5000,()=>{
    console.log("server started");
})
