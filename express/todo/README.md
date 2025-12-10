# 📝 Todo API

A simple RESTful API for managing todos built with Node.js and Express, using a JSON file as the data store.

## 🚀 Features

📋 Get all todos
Retrieve a list of all todos.

## 🔍 Filter todos
Filter todos using query parameters:

status (e.g., ✅ completed, ⏳ in-progress)

title (search by keyword in the title)

dueBefore (todos due before a specific date)

dueAfter (todos due after a specific date)

## ➕ Create a todo
Add a new todo with fields:

title 🏷️

description 📝

status (pending ⏳, completed ✅)

dueDate 📅 (YYYY-MM-DD)

createdAt 🕒 (auto-generated)

## ✏️ Update a todo
Update an existing todo by ID. Replaces all fields.

🗑️ Delete a todo
Delete a todo by ID.

⚡ Getting Started
Prerequisites

Node.js v18+ 🟢

npm (Node Package Manager) 📦

## 💻 Installation

Clone the repository:

git clone <repo-url>


Navigate to the project folder:

cd <project-folder>


Install dependencies:

npm install


Start the server:

node index.js


The server will start on 🌐 http://localhost:2700

## 📌 API Endpoints
Method	Endpoint	Description
GET	/	Get all todos, supports query filters
POST	/	Add a new todo
PUT	/:id	Update a todo by ID
DELETE	/:id	Delete a todo by ID
🔎 Query Parameters for GET /

## status ✅ / ⏳ Filter todos by status

## title 🔤 Search todos by title keyword

dueBefore 📅 Todos due before a specific date

dueAfter 📅 Todos due after a specific date
