import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoInput from "../TodoInput";
import "./todolist.css";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return todos.length ? (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => {
          return <TodoInput todo={todo} key={todo.id}></TodoInput>;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">
      You have completed all your tasks. Enjoy a well deserved rest!
      <span aria-label="relax" role="img">
        {" "}
        🧘
      </span>
    </div>
  );
};

export default TodoList;
