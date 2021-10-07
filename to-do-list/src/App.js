// import logo from "./logo.svg";
import "./App.css";
import Header from "./myComponents/Header";
import { Todo_s } from "./myComponents/Todo_s";
import { Footer } from "./myComponents/Footer";

function App() {
  return (
    <>
      <Header title="ABCD Todo Lists" searchBar={false}/>
      <Todo_s />
      <Footer />
    </>
  );
}

export default App;
