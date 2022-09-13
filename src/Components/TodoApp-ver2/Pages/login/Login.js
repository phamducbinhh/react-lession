/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      navigate("/home");
    }
  }, [navigate]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (
      data.name === "admin" &&
      data.password === "admin1" &&
      data.email === "admin@gmail.com"
    ) {
      alert("Login success");
      navigate("/home");
      localStorage.setItem("auth", true);
    } else {
      alert("Login failed");
    }
  };
  return (
    <Fragment>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "320px",
          margin: "50px auto",
          height: "auto",
          padding: ".6rem",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          borderRadius: "5px",
        }}
      >
        <h1 style={{ color: "red", marginBottom: "10px" }}>
          Login in Todolist
        </h1>
        <label htmlFor="name">Name</label>
        <input
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            margin: "10px 0",
          }}
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          {...register("name", { required: true, maxLength: 10 })}
        />
        <label htmlFor="name">Password</label>
        <input
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            margin: "10px 0",
          }}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          {...register("password", { required: true, minLength: 6 })}
        />
        <label htmlFor="email">Email</label>
        <input
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            margin: "10px 0",
          }}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
        {errors.length !== 0 && (
          <ul className="error-container" style={{ color: "red" }}>
            {errors.name?.type === "required" && (
              <li>không được để trống Name</li>
            )}
            {errors.name?.type === "maxLength" && (
              <li>Không được vượt quá 10 ký tự</li>
            )}
            {errors.password?.type === "required" && (
              <li>không được để trống Password</li>
            )}
            {errors.password?.type === "minLength" && (
              <li>không được nhỏ hơn 6 ký tự</li>
            )}
            {errors.email?.type === "required" && (
              <li>không được để trống Email</li>
            )}
            {errors.email?.type === "pattern" && (
              <li>Email không đúng định dạng</li>
            )}
          </ul>
        )}
        <button
          type="submit"
          style={{
            padding: "10px 0",
            width: "100%",
            margin: "0",
            borderRadius: "5px",
            backgroundColor: "#1877F2",
            marginBottom: "10px",
            marginTop: "10px",
          }}
        >
          Login
        </button>
        <Link to={"/sign"}>Create an account</Link>
      </form>
    </Fragment>
  );
};

export default Login;
