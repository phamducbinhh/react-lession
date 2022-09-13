import React from "react";

//custom hooks
export const useToggle = () => {
  const [value, setValue] = React.useState(false);
  const handleToggle = () => {
    setValue(!value);
  };
  return {
    value,
    handleToggle,
  };
};
