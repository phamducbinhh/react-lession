import React from "react";

const SignUp = () => {
  const [values, setValues] = React.useState({
    name: "",
    password: "",
    email: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: values.name,
      password: values.password,
      email: values.email,
    };
    console.log(data);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form autoComplete="off" onSubmit={submitHandler}>
        <h1>React Hook Form</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          onChange={handleChange}
        />
        <label htmlFor="name">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignUp;
