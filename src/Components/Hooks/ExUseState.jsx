import React from "react";

const ExUseState = () => {
  //   const [count, setCount] = React.useState(0);

  //   const handleChange = () => {
  //     setCount((prev) => prev + 1);
  //   };
  //   const handleChange2 = () => {
  //     if (count > 0) {
  //       setCount((prev) => prev - 1);
  //     }
  //   };

  const [update, setUpdate] = React.useState({
    name: "binhboong",
    age: 20,
    address: "hanoi",
  });

  const handleChange = () => {
    setUpdate({
      ...update,
     bio : "binhboong2017"
    });
  };
  return (
    <div className="flex items-center justify-center mt-10">
      {/* <button className="p-3 mb-2 bg-slate-500" onClick={handleChange2}>
        -
      </button>
      <h1 className="m-3">Count:{count}</h1>
      <button className="p-3 mb-2 bg-slate-500" onClick={handleChange}>
        +
      </button> */}
      <h1>{JSON.stringify(update)}</h1>
      <button onClick={handleChange} className="p-2 border border-emerald-700">Update</button>
    </div>
  );
};

export default ExUseState;
