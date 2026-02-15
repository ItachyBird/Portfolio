import "../../styles/AboutSection.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profilePhoto from "../../assets/me.png";
import Noise from "../../components/shaders/Noise";
import { useTheme } from "../../context/ThemeContext";

export default function AboutSection() {

  const { theme } = useTheme();

  return (
    <section id="about" className="section-container about-section">

      {/* Noise Background */}
      <div className="noise-bg">
        <Noise
          patternSize={theme === "dark" ? 220 : 180}
          patternScaleX={2}
          patternScaleY={2}
          patternRefreshInterval={2}
          patternAlpha={theme === "dark" ? 15 : 35}
        />
      </div>

      <h2 className="about-title mask-target1">&lt;卂乃ㄖㄩㄒ /&gt;</h2>

      <div className="about-content-row">

        <div className="about-info">
          <p className="about-text">
            Hi, <span className="code-name">&lt;Soumyadip /&gt;</span>
          </p>

          <p className="about-text">
            I design and build intuitive digital experiences, blending creativity with code to rapidly turn ideas into working solutions.
          </p>

          <p className="about-text">
            Currently working as a Junior Associate Process Executive at NVIDIA.
          </p>

          <p className="about-text">
            My work includes UX design, UI animation, and interactive prototyping.
          </p>

          <div className="about-socials">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        <div className="about-photo">
          <img src={profilePhoto} alt="Profile" />
        </div>

      </div>

    </section>
  );
}
