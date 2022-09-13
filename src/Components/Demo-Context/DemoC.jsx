import React from "react";
import { ThemeContext } from "styled-components";

const DemoC = () => {
  const themes = React.useContext(ThemeContext);
  return (
    <div className={themes}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. A aut
      praesentium iusto adipisci repudiandae assumenda, distinctio tempore
      nesciunt fuga dicta nostrum? Nulla corporis maxime quis vel ut.
      Voluptatem, debitis sequi?
    </div>
  );
};

export default DemoC;
