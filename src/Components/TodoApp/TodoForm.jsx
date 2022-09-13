import React from "react";

const TodoForm = ({
  handleFormSubmit,
  handleChangeInput,
  todo,
  handleClearAll,
}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        name="todo"
        type="text"
        placeholder="Create a new todo"
        value={todo}
        onChange={handleChangeInput}
      />
      <button type="submit">Add</button>
      <button onClick={handleClearAll}>Clear All</button>
    </form>
  );
};

export default TodoForm;
