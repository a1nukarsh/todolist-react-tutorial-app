import React from "react";
import { TodoItem } from "../myComponents/TodoItem";

export const Todos = (props) => {
    let containerStyle ={
        minHeight : "62vh"
    }
  return (
    <div className="container" style={containerStyle}>
      <h3 className="my-3">To Do's List</h3>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
                <>
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
              <hr/>
              </>
            );
          })}
    </div>
  );
};
