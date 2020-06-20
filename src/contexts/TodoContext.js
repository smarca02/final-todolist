import React, { createContext, useState } from "react";
import uuid from "uuid/dist/v1";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([
    { task: "React Milestone 2", date: "20/06", id: "1" },
  ]);

  const addTodo = (task, date) => {
    setTodos([...todos, { task, date, id: uuid() }]);
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
