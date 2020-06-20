import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

const TodoInput = ({ todo }) => {
  const { removeTodo } = useContext(TodoContext);
  return (
    <li onClick={() => removeTodo(todo.id)}>
      <div className="task">{todo.task}</div>
      <div className="date">{todo.date}</div>
    </li>
  );
};

export default TodoInput;
