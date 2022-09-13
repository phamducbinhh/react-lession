import React from "react";

const TodoEdit = ({
  currentTodo,
  handleEditFormSubmit,
  handleEditInputChange,
  setIsEditing,
  
}) => {
  return (
    <form onSubmit={handleEditFormSubmit}>
      <input
        name="editTodo"
        type="text"
        placeholder="Edit Todo"
        value={currentTodo.text}
        onChange={handleEditInputChange}
      />
      <button type="submit">Update</button>
      {/* here we added a "Cancel" button to set isEditing state back to false which will cancel editing mode */}
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  );
};

export default TodoEdit;
