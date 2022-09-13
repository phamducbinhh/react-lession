import React, { useContext } from "react";
import { DataContext } from "./ContextApi";

const FormInput = () => {
  //sử dụng useContext để lấy dữ liệu từ DataProvider
  const [todos, setTodos, setSearch, setFilterSearch] = useContext(DataContext);

  //tạo 1 state để theo dõi giá trị nhập vào input
  const [values, setValues] = React.useState("");

  //tạo sate click Search
  const [searchClick, setSearchClick] = React.useState(false);
  //hàm submit form để add todolist
  const addTodo = (e) => {
    e.preventDefault();
    if (!values || !values.trim()) return;
    setTodos([...todos, { name: values, completed: false }]);
    setValues("");
  };

  const handleValues = (e) => {
    setValues(e.target.value);
  };

  const handleClickSearch = (e) => {
    setSearchClick(true);
  };

  const handleClickcancel = (e) => {
    setSearchClick(!searchClick);
  };

  const handleSearch = (e) => {
    setFilterSearch(e.target.value);
  };
  return (
    <>
      {searchClick ? (
        <form action="" autoComplete="off" onSubmit={addTodo}>
          <input
            type="text"
            name="todos"
            id="todos"
            value={setSearch}
            onChange={handleSearch}
            placeholder="Search....?"
          />
          <button type="button" onClick={handleClickcancel}>
            Cancel
          </button>
        </form>
      ) : (
        <form action="" autoComplete="off" onSubmit={addTodo}>
          <input
            type="text"
            name="todos"
            id="todos"
            value={values}
            onChange={handleValues}
            placeholder="What needs to be done?"
          />
          <button type="submit">Create</button>
          <button type="button" onClick={handleClickSearch}>
            Search
          </button>
        </form>
      )}
    </>
  );
};

export default FormInput;
