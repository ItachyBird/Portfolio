import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const themes = {
  dark: {
    bg: "#111111",
    text: "#CFCBC5",
    sidebar: "#111111",
     heading: "#E8E6E3"
  },

  light: {
    bg: "#FAF9F6",
    text: "#2B2B2B",
    sidebar: "#FAF9F6",
    heading: "#3A3126"
  }
};

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;
    const selected = themes[theme];

    Object.keys(selected).forEach(key => {
      root.style.setProperty(`--${key}`, selected[key]);
    });

  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
