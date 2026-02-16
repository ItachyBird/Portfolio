import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import Noise from "../components/shaders/Noise";
import { useTheme } from "../context/ThemeContext";
import "../styles/Sidebar.css";

const sections = ["home", "about", "Projects", "TechStack"];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Sidebar() {

  const [active, setActive] = useState("home");
  const { theme } = useTheme();

  const handleClick = (id) => {
    scrollTo(id);
  };

  /* ⭐ Scroll Spy Logic */
  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100) // 0 to 1 in steps

      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();

  }, []);

  return (
    <div className="sidebar no-cursor-effect">

      {/* Noise Background */}
      <div className="sidebar-noise-bg">
        <Noise
          patternSize={theme === "dark" ? 220 : 180}
          patternScaleX={2}
          patternScaleY={2}
          patternRefreshInterval={2}
          patternAlpha={theme === "dark" ? 15 : 35}
        />
      </div>

      <div className="sidebar-nav">

        {sections.map((sec) => (
          <span
            key={sec}
            className={`${active === sec ? "active" : ""} mask-target1`}
            onClick={() => handleClick(sec)}
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </span>
        ))}

      </div>

      <div className="sidebar-bottom">
        <ThemeToggle />
      </div>

    </div>
  );
}
