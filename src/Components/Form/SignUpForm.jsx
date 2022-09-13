import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Must be less than 20 characters";
//   }
//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be less than 20 characters";
//   }
//   return errors;
// };

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    // dùng yup để validate
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be less than 20 characters")
        .required("không được để trống"),
      lastName: Yup.string()
        .max(10, "Must be less than 10 characters")
        .required("Không được để trống"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 flex flex-col gap-4 max-w-[500px] mx-auto"
    >
      <label htmlFor="firstName">FirstName</label>
      <input
        type={"text"}
        name="firstName"
        placeholder="Enter Your FirstName"
        className="gap-2 p-5 border border-gray-200 rounded-md outline-none"
        // value={formik.values.firstName}
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        {...formik.getFieldProps("firstName")}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="text-sm text-red-500">{formik.errors.firstName}</div>
      ) : null}
      <label htmlFor="lastName">lastName</label>
      <input
        type={"text"}
        name="lastName"
        placeholder="Enter Your LastName"
        className="gap-2 p-5 border border-gray-200 rounded-md outline-none"
        // value={formik.values.lastName}
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        {...formik.getFieldProps("lastName")}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="text-sm text-red-500">{formik.errors.lastName}</div>
      ) : null}
      <div>
        <button
          type="submit"
          className="w-full p-4 font-semibold text-white bg-blue-600 rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
