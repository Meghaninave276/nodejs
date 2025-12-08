// const path=require("path");
// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));
// console.log(path.join(__dirname, "public", "index.html"));
import path from 'path'
import {fileURLToPath} from "url"
const __filename=fileURLToPath(import.meta.url);
console.log(__filename)
const __dirname=path.dirname(__filename);
console.log(__dirname);
console.log(path.basename(__filename));