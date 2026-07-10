import { useParams, useNavigate } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import "../styles/projectDetails.css";

// ----------------------
// PROJECT DATA
// ----------------------
const projectsData = [
  

  {
    id: 1,
    title: "Personal Portfolio Website",
    category: "React",
    image: "/portfolio.png",
    status: "Completed",

    description:
      "A responsive portfolio website showcasing my projects, technical skills, and experience.",

    overview:
      "This portfolio was designed and developed using React and Vite to create a fast, modern and responsive web application. It showcases my software development projects while demonstrating component-based architecture and modern frontend development practices.",

    tech: [
      "React",
      "Vite",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "React Router",
      "Responsive Web Design",
      "Git",
      "GitHub",
      "Vercel"
    ],

    features: [
      "Responsive UI",
      "Project filtering",
      "Dynamic project details",
      "Reusable React components",
      "React Router navigation",
      "GitHub integration",
      "Live deployment using Vercel"
    ],

    role:
      "Designed the complete user interface, developed reusable React components, implemented routing, responsive layouts, and deployed the application using Vercel.",

    challenges:
      "The biggest challenge was creating reusable components while maintaining a clean folder structure and ensuring the website remained responsive across different screen sizes.",

    github: "https://github.com/Chathurya1111/portfolio",
    live: "https://chathurya-dhananjani.vercel.app"
  },
  {
    id: 2,
    title: "Event Management UI/UX Design",
    category: "UI/UX Design",
    image: "/figma.png",
    status: "Completed",

    description:
      "A modern event management platform UI/UX design created in Figma focusing on user-friendly navigation, clean layouts, and seamless event planning experience.",

    overview:
      "This UI/UX project was designed using Figma to create a complete event management application interface. The design focuses on improving the user experience by providing intuitive event creation, event discovery, booking, and management features. It demonstrates my understanding of design principles, wireframing, prototyping, and creating visually consistent digital products.",

    tech: [
      "Figma",
      "UI Design",
      "UX Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Responsive Design",
      "User Flow Design"
    ],

    features: [
      "User-friendly dashboard design",
      "Event discovery interface",
      "Event creation and management screens",
      "Interactive prototypes",
      "Consistent design system",
      "Responsive mobile and desktop layouts",
      "Modern UI components"
    ],

    role:
      "Designed the complete user interface and user experience flow using Figma. Created wireframes, high-fidelity mockups, reusable design components, and interactive prototypes while focusing on usability and visual consistency.",

    challenges:
      "The main challenge was creating a simple yet effective user flow that allows users to easily discover, create, and manage events while maintaining a clean and visually appealing interface.",

    github: "",
    live: "https://www.figma.com/proto/FSNMPLjLi89UYA8M7OjI6T/Zyner-UI-UX-Design-Internship-Assessment?node-id=1006-78&p=f&t=LxVy3b2p3YBZxN4M-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
  }
];

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find(
    (item) => item.id === parseInt(id)
  );

  if (!project) {
    return (
      <div className="not-found">
        <h2>Project not found.</h2>

        <button onClick={() => navigate("/projects")}>
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <section className="project-page">

      {/* Back Button */}

      <button
        className="back-button"
        onClick={() => navigate("/projects")}
      >
        ← Back to Projects
      </button>

      {/* Hero Card */}

      <div className="hero-card">

        <div className="hero-left">

          <span className="category">
            {project.category}
          </span>

          <h1>{project.title}</h1>

          <span
            className={`status ${project.status.toLowerCase()}`}
          >
            {project.status}
          </span>

          <p className="hero-description">
            {project.description}
          </p>

          <div className="hero-buttons">

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="live-btn"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                <FaGithub />
                GitHub
              </a>
            )}

          </div>

        </div>

        <div className="hero-right">

          <img
            src={project.image}
            alt={project.title}
          />

        </div>

      </div>

      {/* Overview */}

      <div className="info-card">

        <h2>Project Overview</h2>

        <p>{project.overview}</p>

      </div>

      {/* Tech Stack */}

      <div className="info-card">

        <h2>Tech Stack</h2>

        <div className="tech-stack">

          {project.tech.map((tech, index) => (

            <span
              key={index}
              className="tech-badge"
            >
              {tech}
            </span>

          ))}

        </div>

      </div>

      {/* Features */}

      <div className="info-card">

        <h2>Key Features</h2>

        <ul className="feature-list">

          {project.features.map((feature, index) => (

            <li key={index}>

              <FaCheckCircle className="check-icon" />

              {feature}

            </li>

          ))}

        </ul>

      </div>

      {/* My Role */}

      <div className="info-card">

        <h2>My Role</h2>

        <p>{project.role}</p>

      </div>

      {/* Challenges */}

      <div className="info-card">

        <h2>Challenges & Solutions</h2>

        <p>{project.challenges}</p>

      </div>

    </section>
  );
}

export default ProjectDetails;