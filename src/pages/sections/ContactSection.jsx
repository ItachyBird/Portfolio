import "../../styles/Techstack.css";
import Magnet from "../../components/shaders/Magnet";

export default function ContactSection() {

const techStacks = [
  "Java",
  "Python",
  "JavaScript",
  "C",
  "MongoDB",
  "MySQL",
  "Jira",
  "React.js",
  "HTML5",
  "CSS3",
  "GSAP",
  "Spring Boot",
  "Node.js",
  "Express.js",
  "Git",
  "Docker",
  "CI/CD",
  "REST APIs",
  "Kafka",
  "JWT",
  "WebSocket",
  "Oracle Cloud (OCI)",
  "AWS",
  "Machine Learning",
  "GenAI",
  "Ollama",
  "LangChain",
  "Model Evaluation",
  "Data Labeling",
  "Prompt Engineering",
  "Data Structures & Algorithms",
  "OOP",
  "Networking",
  "IoT",
  "SDLC",
  "Multithreading",
  "System Designing"
];


  return (
    <section id="TechStack" className="section-container contact-section">

      <h2 className="contact-title mask-target1">&lt;ㄒ乇匚卄     卂尺丂乇几卂ㄥ/&gt;</h2>

      <div className="tech-grid">
        {techStacks.map((tech, index) => (
          <Magnet key={index} padding={80} magnetStrength={5}>
            <div className="tech-box">
              <span style={{ fontSize: "16px", fontWeight: "600" }}>
                {tech}
              </span>
            </div>
          </Magnet>
        ))}
      </div>

    </section>
  );
}
