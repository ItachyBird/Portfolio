import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import "../styles/themeToggle.css";

export default function ThemeToggle() {

  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "dark" ? <FiMoon /> : <FiSun />}
    </button>
  );
}
