import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY: any = "react-todo-list-todos";

interface ITodo {
  todo: "";
  completed: Boolean;
  id: "";
}

export default function App(): JSX.Element {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos: any = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) || "{}"
    );
    // localStorage.getItem() can return either a string or null, whereas requires a string
    // so the result of localStorage.getItem() should be tested
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo: any): void => {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        Todo List
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}
