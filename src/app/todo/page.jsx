"use client";

import TodoForm from "@/components/form/todoForm";
import TodoList from "@/components/form/todoList";

export default function Todo() {
  return (
    <>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </>
  );
}
