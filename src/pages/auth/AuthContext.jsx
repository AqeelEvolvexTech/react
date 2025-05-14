import { createContext, useEffect, useState } from "react";
import { getUserFromStorage } from "./authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   useEffect(() => {
      const user = getUserFromStorage();
      if (user) setUser(user);
   }, []);

   const login = (userData) => {
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
   };

   const logout = () => {
      localStorage.removeItem("user");
      setUser(null);
   };

   return <AuthContext value={{ user, login, logout }}>{children}</AuthContext>;
};
