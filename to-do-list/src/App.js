// import logo from "./logo.svg";
import "./App.css";
import Header from "./myComponents/Header";
import { Todos } from "./myComponents/Todos";
import { Footer } from "./myComponents/Footer";

function App() {
  let todos=[
    {
      sno: 1,
      title: "Go to market",
      desc: "Get this job done"
    },
    {
      sno: 2,
      title: "Go to mall",
      desc: "Get this job done"
    },
    {
      sno: 3,
      title: "Go to taj mahal",
      desc: "Get this job done"
    }
  ]
  return (
    <>
      <Header title="ABCD Todo Lists" searchBar={false}/>
      <Todos todos={todos}/>
      <Footer />
    </>
  );
}

export default App;
