import React, { useContext } from "react";
import { DataContext } from "./ContextApi";
import Item from "./Item";

const ListItem = () => {
  //sử dụng useContext để lấy dữ liệu từ DataProvider
  const [todos, setTodos, setSearch] = useContext(DataContext);

  //tạo 1 hàm xử lý khi click vào checkbox
  const handleChecked = (id) => {
    // tạo 1 biến copy
    const newTodos = [...todos];
    // dùng forEach để duyệt lại các mảng vừa copy
    newTodos.forEach((item, index) => {
      if (index === id) {
        item.completed = !item.completed;
      }
    });
    setTodos(newTodos);
  };

  //tạo 1 hàm xử lý logic khi để save values
  const handleEditTodo = (id, editvalue) => {
    // tạo 1 biến copy
    const newTodos = [...todos];
    //dùng forEach để duyệt lại các mảng vừa copy
    newTodos.forEach((item, index) => {
      if (index === id) {
        item.name = editvalue;
      }
    });
    setTodos(newTodos);
  };
  //search

  return (
    <ul className="todos">
      {/* {todos.map((item, index) => {
        return (
          <Item
            key={index}
            data={item}
            id={index}
            handleChecked={handleChecked}
            handleEditTodo={handleEditTodo}
          />
        );
      })} */}
      {todos
        .filter((item) =>
          item.name.toLowerCase().includes(setSearch.toLowerCase())
        )
        .map((item, index) => {
          return (
            <Item
              key={index}
              data={item}
              id={index}
              handleChecked={handleChecked}
              handleEditTodo={handleEditTodo}
            />
          );
        })}
      {/* {todos
        .filter((val) => {
          if (setSearch === "") {
            return val;
          } else {
            return val.name.includes(setSearch);
          }
        })
        .map((item, index) => {
          return (
            <Item
              key={index}
              data={item}
              id={index}
              handleChecked={handleChecked}
              handleEditTodo={handleEditTodo}
            />
          );
        })} */}
    </ul>
  );
};

export default ListItem;
