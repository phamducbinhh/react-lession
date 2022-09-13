import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [logOut, setLogOut] = React.useState(false);

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
  }, [navigate, logOut]);
  //xử lý logout
  const handleLogout = (e) => {
    alert("Logout success");
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogOut(true);
  };
  return (
    <div className="navbar">
      <button
        style={{ cursor: "pointer", padding: "5px" }}
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
};

export default Navbar;
