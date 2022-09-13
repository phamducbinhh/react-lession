import React from "react";
// import "./Button.scss";
import styles from "./Button.module.css";

//thư viện style component
const Button = (props) => {
  return (
    <div>
      <button
        className={`${styles.button} ${
          props.buttonSecondary ? styles.buttonSecondary : ""
        }`}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
