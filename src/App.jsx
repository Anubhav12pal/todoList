import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodo(newTodos) {
    const newTodoList = [...todos, newTodos];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;

    setTodos(localTodos);
  }, []);
  return (
    <>
      <>
        <TodoInput
          todoValue={todoValue}
          setTodoValue={setTodoValue}
          todos={todos}
          handleAddTodo={handleAddTodo}
        />
        <TodoList
          handleEditTodo={handleEditTodo}
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
        />
      </>
    </>
  );
}

export default App;
