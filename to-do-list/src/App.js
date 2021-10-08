// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Header from "./myComponents/Header";
import { Todos } from "./myComponents/Todos";
import { Footer } from "./myComponents/Footer";
import { AddTodo } from "./myComponents/AddTodo";

function App() {
  const onDelete = (todo) => {
    console.log("This is onDelete functin of, ", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc)=>{
    console.log("I am adding this todo, ", title, desc)
    let sno = todos[todos.length-1].sno +1;
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to market",
      desc: "Get this job done",
    },
    {
      sno: 2,
      title: "Go to mall",
      desc: "Get this job done",
    },
    {
      sno: 3,
      title: "Go to taj mahal",
      desc: "Get this job done",
    },
  ]);
  return (
    <>
      <Header title="ABCD Todo Lists" searchBar={false} />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
