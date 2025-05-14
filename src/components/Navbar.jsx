import React from "react";
import { NavLink } from "react-router";
import { useTheme } from "../context/ThemeContext";
import useAuth from "../pages/auth/useAuth";

const Navbar = () => {
   const { user, logout } = useAuth();
   const { theme, toggleTheme } = useTheme();
   const isActive = ({ isActive }) => (isActive ? "green" : "");
   return (
      <header style={{ background: theme === "dark" ? "#222" : "#eee" }}>
         <nav className="container">
            <NavLink to="/" className={isActive}>
               Home
            </NavLink>
            <NavLink to="/about" className={isActive}>
               About
            </NavLink>
            <NavLink to="/contact" className={isActive}>
               Contact
            </NavLink>
            <NavLink to="/blogs" className={isActive}>
               Blogs
            </NavLink>
            <NavLink to="/dashboard" className={isActive}>
               Dashboard
            </NavLink>
            {user && <button onClick={logout}>Logout</button>}
            <button onClick={toggleTheme}>Toggle Theme</button>
         </nav>
      </header>
   );
};

export default Navbar;
