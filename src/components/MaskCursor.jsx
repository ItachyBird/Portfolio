import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import useMousePosition from "../hooks/useMousePosition";
import "../styles/maskCursor.css";

export default function MaskCursor() {

  const [isDesktop, setIsDesktop] = useState(false);
  const [hoverBig, setHoverBig] = useState(false);
  const [hoverSmall, setHoverSmall] = useState(false);
  const [isLight, setIsLight] = useState(false);

  const { x, y } = useMousePosition();

  /* 🎨 Cursor Colors */
  const colorA = "#5A4F45";
  const colorB = "#E4DFD8";

  /* Detect desktop */
  useEffect(() => {
    const check = () => {
      setIsDesktop(
        window.matchMedia("(hover: hover) and (pointer: fine)").matches
      );
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  /* Hover detection */
  useEffect(() => {

    if (!isDesktop) return;

    const bigTargets = document.querySelectorAll(".mask-target");
    const smallTargets = document.querySelectorAll(".mask-target1");

    const enterBig = () => setHoverBig(true);
    const leaveBig = () => setHoverBig(false);

    const enterSmall = () => setHoverSmall(true);
    const leaveSmall = () => setHoverSmall(false);

    bigTargets.forEach(el => {
      el.addEventListener("mouseenter", enterBig);
      el.addEventListener("mouseleave", leaveBig);
    });

    smallTargets.forEach(el => {
      el.addEventListener("mouseenter", enterSmall);
      el.addEventListener("mouseleave", leaveSmall);
    });

    return () => {

      bigTargets.forEach(el => {
        el.removeEventListener("mouseenter", enterBig);
        el.removeEventListener("mouseleave", leaveBig);
      });

      smallTargets.forEach(el => {
        el.removeEventListener("mouseenter", enterSmall);
        el.removeEventListener("mouseleave", leaveSmall);
      });

    };

  }, [isDesktop]);

  /* Detect light section */
  useEffect(() => {

    const detectSection = () => {

      const lightSection = document.querySelector(".light-section");

      if (!lightSection) return;

      const rect = lightSection.getBoundingClientRect();

      const inside =
        y >= rect.top &&
        y <= rect.bottom;

      setIsLight(inside);
    };

    window.addEventListener("mousemove", detectSection);

    return () => window.removeEventListener("mousemove", detectSection);

  }, [y]);

  if (!isDesktop) return null;

  /* 🎯 Cursor Size Logic */
  let size = 40;

  if (hoverBig) size = 300;
  else if (hoverSmall) size = 100;

  /* 🎯 Color Logic */
  const isHovering = hoverBig || hoverSmall;

  let cursorColor;

  if (isLight) {
    cursorColor = isHovering ? colorA : colorB;
  } else {
    cursorColor = isHovering ? colorB : colorA;
  }

  return (
    <motion.div
      className="mask-cursor"
      style={{ background: cursorColor }}
      animate={{
        x: x - size / 2,
        y: y - size / 2,
        width: size,
        height: size
      }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    />
  );
}
