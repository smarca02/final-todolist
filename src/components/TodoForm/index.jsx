import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import "./todoform.css";

const NewTodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task, date);
    setTask("");
    setDate("");
  };
  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Task:">Task:</label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <label htmlFor="Date:">by:</label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input type="submit" value="+" />
      </form>
    </div>
  );
};

export default NewTodoForm;
