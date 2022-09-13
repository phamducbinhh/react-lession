import React from "react";
import { useAuth } from "./Acordial-Context";

const AcordialHeading = ({ children }) => {
  const { show, toggle } = useAuth();
  return (
    <div className="cursor-pointer header" onClick={toggle}>
      {children}
      {show ? <span>+</span> : <span>-</span>}
    </div>
  );
};

export default AcordialHeading;
