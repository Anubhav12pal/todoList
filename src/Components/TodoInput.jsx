import React, { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodo, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Enter Todo..."
      />
      <button
        onClick={() => {
          handleAddTodo(todoValue);
        }}
      >
        Add
      </button>
    </header>
  );
}
