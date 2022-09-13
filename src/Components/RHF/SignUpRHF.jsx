import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const SignUpRHF = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =  (data) => {
    console.log(data);
  };
  return (
    <Fragment>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <h1>React Hook Form</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          {...register("name", { required: true, maxLength: 10 })}
        />
        <label htmlFor="name">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          {...register("password", { required: true, minLength: 6 })}
        />
        <label htmlFor="email">Email</label>
        <input
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
          <ul className="error-container">
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
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};

export default SignUpRHF;
