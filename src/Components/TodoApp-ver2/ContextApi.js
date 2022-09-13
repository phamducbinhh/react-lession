import React, { createContext, useEffect } from "react";

// khởi tạo useContext
export const DataContext = createContext();

const DataProvider = (props) => {
  //tạo biến để lưu localstorage
  const saveLocalStorage = JSON.parse(localStorage.getItem("saveTodos"));
  const [todos, setTodos] = React.useState(
    saveLocalStorage ||
      [
        // {
        //   id: 1,
        //   name: "Learn React",
        //   completed: false,
        // },
      ]
  );

  //sử dụng useEffect để lưu dữ liệu vào localStorage
  useEffect(() => {
    localStorage.setItem("saveTodos", JSON.stringify(todos));
  }, [todos]);

  //tạo state để lưu giữ giá trị search
  const [setSearch, setFilterSearch] = React.useState("");
  const values = [todos, setTodos, setSearch, setFilterSearch];
  return (
    <DataContext.Provider value={values}>{props.children}</DataContext.Provider>
  );
};

export default DataProvider;
