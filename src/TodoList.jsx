import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

// const initialTodos = [
//   { id: 1, text: "Finish HW-03 of Node.js", completed: false },
//   { id: 2, text: "Make a Todo list with Material UI", completed: true },
//   { id: 3, text: "French lesson at 5 pm", completed: false },
//   { id: 4, text: "Prepare for the interview", completed: false },
//   { id: 5, text: "Weightlifting session in the gym", completed: false },
// ];

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) {
    return [];
  }
  return data;
};

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const createTodo = (input) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: nanoid(), text: input, completed: false }];
    });
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexDirection:"column", alignItems:"center", m:5 }}>
      <Typography variant="h3" component="h1" sx={{ flexGrow: 1, mb:5, fontSize:40, letterSpacing:1.5}}>
        Todos
      </Typography>
      <List sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              remove={() => removeTodo(todo.id)}
              toggle={() => toggleTodo(todo.id)}
            />
          );
        })}
        <TodoForm createTodo={createTodo} />
      </List>
    </Box>
  );
}
