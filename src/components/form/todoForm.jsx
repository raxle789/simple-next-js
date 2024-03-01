"use client";

import React, { useState } from "react";
import { useAppDispatch } from "../../lib/hooks";
import { addTodo } from "@/lib/reducers/todoReducer";

const TodoForm = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      dispatch(addTodo({ text }));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
