import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filepath = path.join(__dirname, "db.json");


const readTodos = () => {
  const data = fs.readFileSync(filepath, "utf-8");
  return JSON.parse(data);
};


const writeTodos = (data) => {
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2)); 
};

app.get("/", (req, res) => {
  const todos = readTodos();
  res.json(todos);
});




app.get("/", (req, res) => {
  let todos = readTodos();

  const { status, title, dueBefore, dueAfter } = req.query;


  if (status) {
    todos = todos.filter(t => t.status.toLowerCase() === status.toLowerCase());
  }

  
  if (title) {
    todos = todos.filter(t => t.title.toLowerCase().includes(title.toLowerCase()));
  }


  if (dueBefore) {
    todos = todos.filter(t => new Date(t.dueDate) <= new Date(dueBefore));
  }

  
  if (dueAfter) {
    todos = todos.filter(t => new Date(t.dueDate) >= new Date(dueAfter));
  }

  res.json(todos);
});



app.post("/", (req, res) => {
  let todos = readTodos();

  const newTodo = {
    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,  
    ...req.body
  };

  todos.push(newTodo);
  writeTodos(todos);

  res.json({ msg: "Todo added", todo: newTodo });
});

app.put("/:id", (req, res) => {
  let todos = readTodos();
  const id = Number(req.params.id);

  const index = todos.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ msg: "Todo not found" });

  todos[index] = { id, ...req.body }; // replace all fields
  writeTodos(todos);

  res.json({ msg: "Todo updated", todo: todos[index] });
});

app.delete("/:id", (req, res) => {
  let todos = readTodos();
  const id = Number(req.params.id);

  const filtered = todos.filter(t => t.id !== id);

  if (filtered.length === todos.length)
    return res.status(404).json({ msg: "Todo not found" });

  writeTodos(filtered);

  res.json({ msg: "Todo deleted" });
});



app.listen(2700, () => {
  console.log("server started");
});
