import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//using Yup to validate the form
const schema = yup.object({
  firstName: yup
    .string()
    .required("First name is required")
    .max(10, "First name is too long"),
});
const SignUpFormHooks = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-10 flex flex-col gap-4 max-w-[500px] mx-auto"
      >
        <label htmlFor="firstName">FirstName</label>
        <input
          type={"text"}
          name="firstName"
          id="firstName"
          placeholder="Enter Your FirstName"
          className="gap-2 p-5 border border-gray-200 rounded-md outline-none"
          //   {...register("firstName", { required: true, maxLength: 10 })}
        />
        {/* {errors.firstName?.type === "required" && (
          <div className="text-sm text-red-500">không được để trống</div>
        )} */}
        {errors?.firstName && (
          <div className="text-sm text-red-500">{errors.firstName.message}</div>
        )}
        {/* {errors.firstName?.type === "maxLength" && (
          <div className="text-sm text-red-500">nhập quá số lượng ký tự</div>
        )} */}
        <label htmlFor="lastName">lastName</label>
        <input
          type={"text"}
          name="lastName"
          id="lastName"
          placeholder="Enter Your LastName"
          className="gap-2 p-5 border border-gray-200 rounded-md outline-none"
            {...register("lastName", { required: true, maxLength: 10 })}
        />
        {errors.lastName?.type === "required" && (
          <div className="text-sm text-red-500">không được để trống</div>
        )}
        {errors.lastName?.type === "maxLength" && (
          <div className="text-sm text-red-500">nhập quá số lượng ký tự</div>
        )}
        <label htmlFor="email">email</label>
        <input
          type={"text"}
          name="email"
          id="email"
          placeholder="Enter Your email"
          className="gap-2 p-5 border border-gray-200 rounded-md outline-none"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
            })}
        />
        {errors.email?.type === "required" && (
          <div className="text-sm text-red-500">không được để trống</div>
        )}
        {errors.email?.type === "pattern" && (
          <div className="text-sm text-red-500">
            Email không đúng định dạng
          </div>
        )}
        <div>
          <button
            type="submit"
            className="w-full p-4 font-semibold text-white bg-blue-600 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpFormHooks;
