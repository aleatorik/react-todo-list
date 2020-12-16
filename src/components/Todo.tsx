import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const Todo = ({ todo, toggleComplete, removeTodo }: any) => {
  const handleCheckboxClick = (): void => {
    toggleComplete(todo.id);
  };

  const handleRemoveClick = (): void => {
    removeTodo(todo.id);
  };

  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null || undefined,
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
};

export default Todo;