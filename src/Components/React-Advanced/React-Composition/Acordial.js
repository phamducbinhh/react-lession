import React from "react";
import { AuthProvider } from "./Acordial-Context";
import AcordialContent from "./AcordialContent";
import AcordialHeading from "./AcordialHeading";
// import { useToggle } from "./useToggle";

//specialize component for editing
const Acordial = ({ header, children }) => {
  //   const [show, setShow] = React.useState(false);
  //   const toggle = () => {
  //     setShow(!show);
  //   };
//   const { value: show, handleToggle: toggle } = useToggle();
  return (
    <div>
      <AuthProvider>
        <AcordialHeading>{header}</AcordialHeading>
        <AcordialContent>{children}</AcordialContent>
      </AuthProvider>
    </div>
  );
};

export default Acordial;
