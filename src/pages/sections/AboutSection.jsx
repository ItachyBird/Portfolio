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

      <h2 className="about-title mask-target">&lt;卂乃ㄖㄩㄒ /&gt;</h2>

      <div className="about-content-row">

        <div className="about-info">
          <p className="about-text">

  Hey, <span className="code-name"><b>&lt;Soumyadip /&gt;</b></span> here :
</p>

<p className="about-text">
  A <span className="highlight">CSE (IoT, Cyber Security & Blockchain)</span> graduate of 2025 who is deeply passionate about coding and modern web technologies. 
  I enjoy exploring the evolving tech landscape — from building interactive web experiences to diving into emerging domains like blockchain, automation, and intelligent systems.
</p>

<p className="about-text">
  I believe technology is not just about writing code, but about creating meaningful solutions. 
  I am constantly learning, experimenting, and upgrading my skill set to grow both as a developer and as a problem solver.
</p>

<p className="about-text">
  Previously worked as a Junior Associate Process Executive at <span className="highlight">&lt;Zensar Technologies</span>. 
  Worked as a <b>&lt;Data Annotator/&gt;</b>, <b>&lt;Data Labeler/&gt;</b>, and <b>&lt;Prompt Engineer/&gt;</b> an AI project for the <b>&lt;NVIDIA client/&gt;</b>. This role allows me to gain hands-on experience in machine learning data preparation, quality evaluation, and model improvement workflows.
</p>


<p className="about-text">
  Dreaming big, building consistently, and chasing innovation one commit at a time ||
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
