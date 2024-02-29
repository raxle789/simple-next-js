"use client";

import React from "react";
import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import { toggleTodo } from "@/lib/reducers/todoReducer";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todo.todos);
  console.log("todos: ", todos);

  const dispatch = useAppDispatch();
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => dispatch(toggleTodo(todo.id))}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
