import React, { useEffect, useState } from "react";
import TodoEdit from "./TodoEdit";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todo = () => {
  //local storage
  const localStorageJobs = JSON.parse(localStorage.getItem("todos"));
  // need state to keep track of todos
  const [todos, setTodos] = useState(localStorageJobs || []);
  // need state to keep track of the value in the input
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  // object state to set so we know which todo item we are editing
  const [currentTodo, setCurrentTodo] = useState({});

  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, [e.target.name]: e.target.value });
  };
  // useEffect to run once the component mounts
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      // set the new todos state (the array)
      setTodos([
        // copy the current values in state
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim(),
        },
      ]);
    }
    // reset the input value to an empty string
    setTodo("");
  };
  const handleChangeInput = (e) => {
    setTodo(e.target.value);
  };
  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  };
  // function to delete a todo
  const handleDeleted = (id) => {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  };
  //function handleUpdate
  const handleUpdateTodo = (id, updatedTodo) => {
    const updateItem = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: updatedTodo };
      }
      return todo;
    });
    setTodos(updateItem);
  };
  //function to edit a todo
  const handleEdit = (todo) => {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  };

  //function clearAll
  const handleClearAll = () => {
    localStorage.removeItem("todos");
    setTodos([]);
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      {isEditing ? (
        <TodoEdit
          currentTodo={todo}
          handleEditFormSubmit={handleEditFormSubmit}
          handleEditInputChange={handleEditInputChange}
          setIsEditing={setIsEditing}
        />
      ) : (
        <TodoForm
          todo={todo}
          handleChangeInput={handleChangeInput}
          handleFormSubmit={handleFormSubmit}
          handleClearAll={handleClearAll}
        />
      )}
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            handleDeleted={handleDeleted}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
