import React from "react";
import useHandleChange from "../custom/useHandleChange";

const ExInput = () => {
  //custom hook
  const { values, handleChange } = useHandleChange({
    fullname: "",
    email: "",
    hobby: false,
  });

  const [error, setError] = React.useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (values.fullname.length < 3 || values.fullname === "") {
      setError("Fullname is too short");
    } else {
      setError("");
    }
  };
  return (
    <div className="p-5">
      <form
        className="flex gap-x-3"
        autoComplete="off"
        onSubmit={handleSubmitForm}
      >
        <input
          type="text"
          name="fullname"
          className="border p-5 border-gray-200 w-full max-w-[300px] rounded-lg m-5 outline-none"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="border p-5 border-gray-200 w-full max-w-[300px] rounded-lg m-5 outline-none"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        {/* <input type={"checkbox"} name="hobby" onChange={handleChange} /> */}
        <button type="submit" className="p-3 text-white bg-blue-500 rounded-lg">
          Submit
        </button>
      </form>
      {error}
    </div>
  );
};

export default ExInput;

