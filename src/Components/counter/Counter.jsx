import React, { useReducer } from "react";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.data,
      };

    case "FAILURE":
      return {
        ...state,
        data: [],
        error: action.data,
      };

    default:
  }
};
function Counter() {
  const [user, dispatch] = useReducer(reducer, initialState);

  const getUserData = async () => {
    dispatch({ type: "REQUEST" });
    try {
      const respones = await fetch("https://reqres.in/api/users");
      const result = await respones.json();
      dispatch({ type: "SUCCESS", data: result.data });
    } catch (error) {
      dispatch({ type: "FAILURE", data: error });
    }
  };
  return (
    <div className="p=5 flex gap-x-4 m-10">
      <button
        className="inline-block p-3 text-white bg-green-400"
        onClick={getUserData}
      >
        GET DATA
      </button>
      <span className="text-2xl font-bold">{JSON.stringify(user)}</span>
    </div>
  );
}

export default Counter;
