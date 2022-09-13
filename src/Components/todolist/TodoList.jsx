import React from "react";
import "./styles.css";

const TodoList = () => {
  //lấy localStorage
  const localStorageJobs = JSON.parse(localStorage.getItem("jobs"));
  //job mới
  const [todos, setTodos] = React.useState("");
  //danh sách công việc
  const [jobs, setJobs] = React.useState(localStorageJobs || []);

  //tạo hàm thêm công việc
  const handleSubmit = (e) => {
    if (!todos || !todos.trim()) return;
    setJobs((prev) => {
      const newJobs = [...prev, todos];
      const jsonJob = JSON.stringify(newJobs);
      //lưu vào localStorage
      localStorage.setItem("jobs", jsonJob);
      return newJobs;
    });
    setTodos("");
  };

  //removeAll job khỏi localStorage
  const removeAll = () => {
    localStorage.removeItem("jobs");
    setJobs([]);
  };

  // remove từng job trong localStorage
  const removeJob = (index) => {
    setJobs((prev) => {
      console.log(prev);
      const newJobs = [...prev];
      newJobs.splice(index, 1);
      //update lại local storage
      const jsonJob = JSON.stringify(newJobs);
      //lưu vào localStorage
      localStorage.setItem("jobs", jsonJob);
      return newJobs;
    });
    setTodos("");
  };
  return (
    <div className="todo">
      <div className="todo-input">
        <input
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
          className="input"
        />
        <button onClick={handleSubmit} className="button">
          Add
        </button>
        <button onClick={removeAll} className="button">
          Clear
        </button>
      </div>

      <ul className="list">
        {jobs.map((item, index) => (
          <li key={index}>
            {item}
            <button className="clear " onClick={()=> removeJob(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
