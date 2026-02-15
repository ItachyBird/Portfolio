import { FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import "../styles/mobileMenu.css";

const scrollTo = (id, closeMenu) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  closeMenu(false);
};

export default function MobileMenu({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="mobile-menu">

      {/* Close Button */}
      <FaTimes
        className="mobile-close"
        onClick={() => setOpen(false)}
      />

      <div className="mobile-menu-links">

        <p onClick={() => scrollTo("home", setOpen)}>Home</p>
        <p onClick={() => scrollTo("about", setOpen)}>About</p>
        <p onClick={() => scrollTo("projects", setOpen)}>Projects</p>
        <p onClick={() => scrollTo("contact", setOpen)}>Contact</p>

      </div>

      {/* Theme Toggle */}
      <div className="mobile-toggle">
        <ThemeToggle />
      </div>

    </div>
  );
}
