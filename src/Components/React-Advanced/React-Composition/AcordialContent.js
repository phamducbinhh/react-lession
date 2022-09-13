import React from "react";
import { useAuth } from "./Acordial-Context";

const AcordialContent = ({ children }) => {
  const { show } = useAuth();
  return <div>{show && <div className="content">{children}</div>}</div>;
};

export default AcordialContent;
