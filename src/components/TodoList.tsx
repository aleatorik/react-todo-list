import React from "react";
import { List } from "@material-ui/core";
import Todo from "./Todo";

const TodoList = ({ todos, toggleComplete, removeTodo }: any) => {
  return (
    <List>
      {todos.map((todo: string, index: number) => (
        <Todo
          key={index}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </List>
  );
};

export default TodoList;
