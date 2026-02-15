import { useState, useEffect } from "react";

export default function useMousePosition() {

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {

    // ✅ Disable on touch/mobile devices
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    if (isTouchDevice) return;

    let rafId;

    const move = (e) => {
      // ✅ Use requestAnimationFrame for smoother performance
      rafId = requestAnimationFrame(() => {
        setMouse({
          x: e.clientX,
          y: e.clientY
        });
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafId);
    };

  }, []);

  return mouse;
}
