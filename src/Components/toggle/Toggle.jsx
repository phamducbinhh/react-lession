import React, { useState } from "react";
import "./Toggle.css";

function Toggle() {
  const [on, setOn] = useState(false);

  const handleToggle = () => {
    setOn((prev) => !prev);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
    </div>
  );
}

export default Toggle;
