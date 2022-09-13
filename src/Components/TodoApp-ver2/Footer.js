import React, { useContext } from "react";
import { DataContext } from "./ContextApi";

const Footer = () => {
  //sử dụng useContext để lấy dữ liệu từ DataProvider
  const [todos, setTodos] = useContext(DataContext);

  const [checkAll, setCheckAll] = React.useState(false);

  //hàm select all
  const handleSelectAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((item) => {
      return (item.completed = !checkAll);
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  //hàm deleted todolist
  const handleDelete = () => {
    const removeItem = todos.filter((item) => {
      return item.completed === false;
    });
    setTodos(removeItem);
    setCheckAll(!checkAll);
  };
  return (
    <>
      {todos.length === 0 ? (
        <h2 className="nothing">Congratulations! Nothings To Do</h2>
      ) : (
        <div className="row">
          <label htmlFor="all">
            <input
              type="checkbox"
              name="all"
              id="all"
              onChange={handleSelectAll}
            />
            All
          </label>
          <p>You have {todos.length} to do</p>
          <button id="delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default Footer;
