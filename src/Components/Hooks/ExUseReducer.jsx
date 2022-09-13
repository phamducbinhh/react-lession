import React, { useReducer } from "react";

//useState
//1 init state 0
//2 action : Up (state + 1) / Down ( state - 1)

//useReducer
//1 Init state : 0
//2 action : Up (state + 1) / Down ( state - 1)
//3 reducer
//4 dispatch

//cac buoc de su dung useReducer
//Init State
const initState = 0;
//Action
const UP_ACTION = "up";
const DOWN_ACTION = "down";

//Reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("invalid errors");
  }
};
const ExUseReducer = () => {
  const [count, setCount] = useReducer(reducer, initState);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Down</button>
      <button onClick={() => setCount(count + 1)}>Up</button>
    </div>
  );
};

export default ExUseReducer;
