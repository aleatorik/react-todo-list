import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addTodo }: any) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
  });

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    // trim() gets rid of string whitespace
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      // reset task input
      setTodo({ ...todo, task: "" });
    }
  };

  const handleTaskInputChange = (e: any): void => {
    setTodo({ ...todo, task: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Task"
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">submit</Button>
    </form>
  );
};

export default TodoForm;
