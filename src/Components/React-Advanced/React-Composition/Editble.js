import React from "react";
import { useToggle } from "./useToggle";

const Editble = () => {
  //   const [edit, setEdit] = React.useState(false);
  //   const toggleEdit = () => {
  //     setEdit(!edit);
  //   };
  const { value: edit, handleToggle: toggleEdit } = useToggle();
  return (
    <div>
      {edit && (
        <input type={"text"} className="p-4 border border-b-amber-300" />
      )}
      <button onClick={toggleEdit}>Open</button>
    </div>
  );
};

export default Editble;
