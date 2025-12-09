# 📌 Node.js Basic HTTP Server with Request Logging

This project is a simple Node.js HTTP server built using the core http and fs modules. It handles multiple HTTP request methods (GET, POST, PUT, DELETE) for different routes and logs each request into a text file.

## 🚀 Features

Handles GET, POST, PUT, DELETE requests

Supports multiple routes:

/ → Home Page

/about → About Page

/service → Services Page

/portfolio → Portfolio Page

Logs client request details including:

URL

Method

Timestamp

Client IP

Stores logs in one.txt

📄 Log Format Example
client request on http://localhost:4600/about by GET
at 10/11/2025 | 14:30:12 from this IP: ::1

## 📂 Project Structure
├── server.js
└── one.txt   (auto-generated logs)

## ▶️ How to Run

Install Node.js (if not already installed)

Save the script as server.js

Run the server:

node server.js


## Open browser and visit:

http://localhost:4600/
http://localhost:4600/about
http://localhost:4600/service
http://localhost:4600/portfolio

## 📌 Notes

Unhandled routes return a 404 Page Not Found message in the console (but not to client — can be improved)

fs.appendFileSync() is used for logging. For high-load servers, async file handling is recommended.

This project is useful for learning basic HTTP server setup without Express.js.

https://github.com/user-attachments/assets/71e90165-0cb7-40df-ac01-b24a3686e0a7



