import React from "react";
import { useSelector } from "react-redux";
import Count from "./Count";
const Redux = () => {
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <h2>The Count From App is : {count}</h2>
      <Count />
    </div>
  );
};

export default Redux;
