import React from "react";

const Mounted = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      <h1>{show && "Hi anh em F8"}</h1>
    </div>
  );
};

export default Mounted;
