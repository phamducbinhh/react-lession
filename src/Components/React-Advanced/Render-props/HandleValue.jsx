import React from "react";

//lifting state up to the component
const HandleValue = () => {
  const [value, setValue] = React.useState("");
  return (
    <div>
      <Input value={value} setValue={setValue}></Input>
      <DisplayValue value={value}></DisplayValue>
    </div>
  );
};

const Input = ({ value, setValue }) => {
  <input
    type="text"
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />;
};

const DisplayValue = ({ value }) => {
  return <span>{value}</span>;
};

export default HandleValue;
