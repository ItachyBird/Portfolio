import "../../styles/ProjectSection.css";

import terminal from "../../assets/projectsimg/terminal.png";
import flightoptimization from "../../assets/projectsimg/flightoptimization.png";
import chatapp from "../../assets/projectsimg/chatapp.png";
import food from "../../assets/projectsimg/food.png";
import docapp from "../../assets/projectsimg/docapp.png";
import spacefolio from "../../assets/projectsimg/spacefolio.png";
import movieiot from "../../assets/projectsimg/movieiot.png";
import weatherapp from "../../assets/projectsimg/weatherapp.png";
import gesture from "../../assets/projectsimg/gesture.png";
import fashion from "../../assets/projectsimg/fashion.png";
import apple from "../../assets/projectsimg/apple.png";


export default function ProjectSection() {
const projects = [
  {
    title: "Terminal Portfolio",
    image: terminal,
    description:
      "Interactive portfolio mimicking a terminal interface where users type commands to explore information and projects.",
    github: "https://github.com/ItachyBird/terminal-portfolio",
    live: "#",
    date: "Jul 2025",
  },
  {
    title: "Flight Route Optimization",
    image: flightoptimization,
    description:
      "AI system for dynamic flight route planning using ACO, Genetic Algorithms and PPO with weather integration.",
    github: "https://github.com/ItachyBird/FROS",
    live: "#",
    date: "May 2025",
  },
  {
    title: "Encrypted Chat Application",
    image: chatapp,
    description:
      "Secure real-time chat app featuring AES encryption, GZIP compression, WebSocket messaging and multimedia support.",
    github: "https://github.com/ItachyBird/encryptedchatapp",
    live: "#",
    date: "Jun 2025",
  },
  {
    title: "Cloud Kitchen System",
    image: food,
    description:
      "Real-time cloud kitchen management platform with dashboards for order tracking and product monitoring.",
    github: "https://github.com/ItachyBird/FOOD_DELIVERY_APP",
    live: "#",
    date: "Nov 2024",
  },
  {
    title: "Doctor Booking System",
    image: docapp,
    description:
      "Full-stack doctor appointment scheduling platform with authentication and real-time doctor-patient interaction.",
    github: "https://github.com/ItachyBird/doctor-booking-management",
    live: "#",
    date: "Apr 2024",
  },
  {
    title: "Spacefolio",
    image: spacefolio,
    description:
      "3D space-themed portfolio featuring futuristic environment, animations and interactive project showcases.",
    github: "https://github.com/ItachyBird/terminal-portfolio",
    live: "#",
    date: "Oct 2024",
  },
  {
    title: "OTT Streaming Platform",
    image: movieiot,
    description:
      "Responsive streaming platform with video playback, REST backend, secure authentication and server-side rendering.",
    github: "https://github.com/ItachyBird/ott",
    live: "#",
    date: "Mar 2024",
  },
  {
    title: "SKYCAST Weather App",
    image: weatherapp,
    description:
      "Real-time weather application with location detection, UI animations and 7-day forecast using external APIs.",
    github: "https://github.com/ItachyBird/weatherapp",
    live: "#",
    date: "May 2024",
  },
  {
    title: "Gesture Detection using Python",
    image: gesture,
    description:
      "Real-time ASL gesture recognition using computer vision and deep learning via webcam input.",
    github: "https://github.com/ItachyBird/Gesture-detection-asl",
    live: "#",
    date: "Jul 2024",
  },
  {
    title: "Fashion Landing Page",
    image: fashion,
    description:
      "Animated fashion brand landing page featuring scroll-based GSAP animations and responsive UI.",
    github: "https://github.com/ItachyBird/fashion-landing-page",
    live: "#",
    date: "Nov 2024",
  },
  {
    title: "Apple Homepage Clone",
    image: apple,
    description:
      "Pixel-perfect Apple homepage recreation with scroll animations and optimized modular components.",
    github: "https://github.com/ItachyBird/apple_clone",
    live: "#",
    date: "Mar 2024",
  },
];


  return (
    <section id="Projects" className="project-section">
      <h2 className="project-title mask-target1">&lt;乃ㄩ丨ㄥᗪ/&gt;</h2>

      <div className="project-list ">
        {projects.map((project, index) => (
          <div className="project-card mask-target1" key={index}>
            
            {/* LEFT CONTENT */}
            <div>
              <h3 className="project-name">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>

              <div className="project-date">{project.date}</div>
            </div>

            {/* RIGHT LAPTOP MOCKUP */}
            <div className="laptop">
              <div className="laptop-screen">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="laptop-base"></div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
