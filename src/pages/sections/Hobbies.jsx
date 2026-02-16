import "../../styles/hobbiessection.css";
import Magnet from "../../components/shaders/Magnet";

export default function HobbiesSection() {

  const hobbies = [
    "Gaming 🎮",
    "Coding 💻",
    "UI Designing 🎨",
    "Tech Exploring ⚡",
    "Anime 🍿",
    "Music 🎧"
  ];

  return (
    <section id="TechStack" className="section-container hobbies-section">

      <h2 className="hobbies-title mask-target1">
        &lt;ㄒ乇匚卄 卂尺丂乇几卂ㄥ/&gt;
      </h2>

      <div className="tech-grid">
        {hobbies.map((hobby, index) => (
          
            <div className="tech-card mask-target1">
              {hobby}
            </div>
          
        ))}
      </div>

    </section>
  );
}
