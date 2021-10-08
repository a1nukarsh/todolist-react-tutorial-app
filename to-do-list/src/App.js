// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Header from "./myComponents/Header";
import { Todos } from "./myComponents/Todos";
import { Footer } from "./myComponents/Footer";
import { AddTodo } from "./myComponents/AddTodo";

function App() {
  let initTodo
  if(localStorage.getItem("todos")===null){
    initTodo =[]
  }
  else{
    initTodo = [JSON.parse(localStorage.getItem("todos"))]
  }
  
  
  const onDelete = (todo) => {
    console.log("This is onDelete functin of, ", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo, ", title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodos] = useState([initTodo]);
  return (
    <>
      <Header title="ABCD Todo Lists" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
