import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  const date = new Date();
  const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.toLocaleTimeString()}`;

  res.writeHead(200, { "Content-Type": "text/plain" });

  fs.appendFileSync("logger.txt", `Request received at: ${formattedDate}\n`);

  res.end("Hello World");
});

server.listen(4540, () => {
  console.log("server started");
});
