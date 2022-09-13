import React from "react";
import "./css/SignUpForm.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    //dùng yup validate form
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Không được để trống")
        .min(4, "Name is too short"),
      email: Yup.string()
        .required("Không được để trống")
        .matches(
          /(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/,
          "Email Khong Hop Le"
        ),
      password: Yup.string()
        .required("Không được để trống")
        .min(6, "Password is too short")
        .max(20, "Password is too long"),
      confirmPassword: Yup.string()
        .required("Không được để trống")
        .oneOf([Yup.ref("password"), null], "Passwords không trùng nhau"),
      phone: Yup.string()
        .required("Không được để trống")
        .matches(/^[0-9\-+]{9,15}$/, "số điện thoại không hợp lệ"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <section>
        <form action="" className="info-form" onSubmit={formik.handleSubmit}>
          <label htmlFor="">UserName</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            placeholder="Enter Your Name"
            onChange={formik.handleChange}
          />
          {formik.errors.name && formik.touched.name ? (
            <p className="text-red-500">{formik.errors.name}</p>
          ) : null}
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={formik.values.email}
            placeholder="Enter Your Email"
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email ? (
            <p className="text-red-500">{formik.errors.email}</p>
          ) : null}
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            placeholder="Enter Your Password"
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password ? (
            <p className="text-red-500">{formik.errors.password}</p>
          ) : null}
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formik.values.confirmPassword}
            placeholder="Confirm Your Password"
            onChange={formik.handleChange}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
            <p className="text-red-500">{formik.errors.confirmPassword}</p>
          ) : null}
          <label htmlFor="">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formik.values.phone}
            placeholder="Enter Your Phone Number"
            onChange={formik.handleChange}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <p className="text-red-500">{formik.errors.phone}</p>
          ) : null}
          <button type="submit" className="button">
            Continue
          </button>
        </form>
      </section>
    </>
  );
};

export default SignUpForm;
