import { createContext, use, useState } from "react";

// Create context
const ThemeContext = createContext();

// Create provider
export const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = useState("light");

   const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

   return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};

// Custom hook for easier use
export const useTheme = () => use(ThemeContext);
