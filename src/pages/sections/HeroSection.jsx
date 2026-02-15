import { useEffect, useState } from "react";
import Threads from "../../components/shaders/Threads";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section
      id="home"
      className="section-container"
      style={{
        position: "relative",
        overflow: "hidden",
        height: isMobile ? "100vh" : "100vh", // ✅ full screen so About is hidden
      }}
    >
      {/* Threads Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Threads amplitude={1} distance={0} enableMouseInteraction />
      </div>

      {/* Hero Content */}
      <div
        className="mask-target"
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 16px",
        }}
      >
        <p
          style={{
            fontSize: isMobile ? "16px" : "20px",
            fontWeight: 400,
            margin: 0,
            marginTop: isMobile ? -8 : 0,
          }}
        >
          Hi, I’m
        </p>

        <p
          style={{
            fontSize: isMobile ? "30px" : "50px",
            fontWeight: 800,
            marginTop: isMobile ? 16 : 20,
            lineHeight: 1.2,
            wordBreak: "break-word",
          }}
        >
          丂龱ㄩ爪ㄚ闩ᗪ工尸
        </p>
      </div>

      {/* Mouse Scroll Icon */}
      <div
        style={{
          position: "absolute",
          bottom: isMobile ? "20px" : "28px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: "24px",
            height: "38px",
            border: "2px solid var(--text)",
            borderRadius: "14px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
            opacity: 0.8,
          }}
        >
          <div
            style={{
              width: "4px",
              height: "8px",
              background: "var(--text)",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
