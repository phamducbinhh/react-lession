import React from "react";

const TodoItem = ({ todo, handleDeleted, handleEdit }) => {
  return (
    <div>
      <li key={todo.id}>
        {todo.text}
        <button onClick={() => handleDeleted(todo.id)}>Clear</button>
        <button onClick={() => handleEdit(todo)}>Edit</button>
      </li>
    </div>
  );
};

export default TodoItem;
