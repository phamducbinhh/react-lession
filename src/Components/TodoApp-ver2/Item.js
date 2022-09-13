import React, { Fragment } from "react";

const Item = ({ data, id, handleChecked, handleEditTodo }) => {
  const [edit, setEdit] = React.useState(false);
  //theo dõi giá trị input khi nhập khi edit
  const [editvalue, setEditValue] = React.useState(data.name);

  //hàm xử lý khi click vào Edit
  const handleEdit = () => {
    setEdit(true);
  };

  //hàm save values khi edit
  const handleSaveItem = () => {
    setEdit(false);
    handleEditTodo(id, editvalue);
  };
  return (
    <Fragment>
      {edit ? (
        <li>
          <input
            type="text"
            id="editvalue"
            name="editvalue"
            value={editvalue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={() => handleSaveItem(id)} className="save">Save</button>
        </li>
      ) : (
        <li>
          <label htmlFor={id} className={data.completed ? "active" : ""}>
            <input
              type="checkbox"
              id={id}
              checked={data.completed}
              onChange={() => handleChecked(id)}
            />
            {data.name}
          </label>
          <button disabled={data.completed} onClick={handleEdit}>
            Edit
          </button>
        </li>
      )}
    </Fragment>
  );
};

export default Item;
