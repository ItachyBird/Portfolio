import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MobileMenu from "./components/MobileMenu";
import Home from "./pages/Home";
import { FaBars } from "react-icons/fa";
import MaskCursor from "./components/MaskCursor";

export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Global Mask Cursor */}
      <MaskCursor />

      <div className="app-layout">

        {/* Desktop Sidebar */}
        <Sidebar />

        {/* ✅ FIXED HAMBURGER (Outside scroll area) */}
        <div className="hamburger">
          <FaBars onClick={() => setMenuOpen(true)} />
        </div>

        {/* Mobile Fullscreen Menu */}
        <MobileMenu open={menuOpen} setOpen={setMenuOpen} />

        <div className="page-wrapper">

          {/* Scrollable Content */}
          <div className="content">
            <Home />
          </div>

        </div>

      </div>
    </>
  );
}
