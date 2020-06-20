import React from "react";
import TodoContextProvider from "./contexts/TodoContext";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import ".page_bkgd.svg";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Navbar />
        <TodoForm />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
