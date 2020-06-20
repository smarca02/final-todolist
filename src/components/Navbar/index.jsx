import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import "./navbar.css";

const Navbar = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="navbar">
      <h1>Things to do today</h1>
      <p>So far you have {todos.length} tasks to go through</p>
    </div>
  );
};

export default Navbar;
