import React from "react";
//custom hook
export default function useHandleChange(initialvalue) {
  const [values, setValues] = React.useState(initialvalue);
  const handleChange = (e) => {
    const type = e.target.type;
    setValues({
      ...values,
      [e.target.name]: type ? e.target.checked : type,
    });
  };
  return { values, handleChange };
}
