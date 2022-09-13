import React, { Fragment } from "react";
import { ThemeContext } from "styled-components";
import DemoB from "./DemoB";
import "./style.scss";

const DemoA = () => {
  const [themes, setThemes] = React.useState("dark");

  const handleChangeColor = () => {
    setThemes(themes === "dark" ? "light" : "dark");
  };
  return (
    <Fragment>
      <ThemeContext.Provider value={themes}>
        <DemoB />
        <button onClick={handleChangeColor}>Change Themes</button>
      </ThemeContext.Provider>
    </Fragment>
  );
};

export default DemoA;
