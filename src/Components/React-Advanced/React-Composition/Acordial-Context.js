import { createContext, useContext } from "react";
import { useToggle } from "./useToggle";

const AuthContext = createContext();

function AuthProvider(props) {
  const { value: show, handleToggle: toggle } = useToggle();

  const values = { show, toggle };
  return (
    <AuthContext.Provider value={ values } {...props}></AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within a AuthProvider");
  return context;
}
export { AuthProvider, useAuth };
