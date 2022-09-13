import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../Redux-ToolKit/CounterSlice";

const Count = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  //viet 1 function handleIncrement
  const handleInCremeanst = () => {
    dispatch(increment());
  };

  const handleDeCremeanst = () => {
    if (count > 0) {
      dispatch(decrement());
    }
  };

  const handleIncrementAll = () => {
    dispatch(incrementByAmount(10));
  };
  return (
    <div className="flex flex-col items-center p-5 bg-white shadow-md w-[400px] mx-auto mt-10">
      <h2 className="mb-5">Count:{count}</h2>
      <div className="flex items-center justify-center gap-x-5">
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleDeCremeanst}
        >
          deCreamens
        </button>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleInCremeanst}
        >
          inCreamens
        </button>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleIncrementAll}
        >
          All + 10
        </button>
      </div>
    </div>
  );
};

export default Count;
