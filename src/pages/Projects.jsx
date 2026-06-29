import { useState } from "react";
import "../styles/projects.css";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    title: "Student Marks System",
    category: "java",
    description: "A Java-based student marks management system.",
    tech: ["Java", "OOP"],
    image: "/project.png",
    github: "https://github.com/Chathurya1111/Student-Mark-Management-System",
    status: "Completed"
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "web",
    description: "Personal portfolio built using React.",
    tech: ["React", "CSS"],
    image: "/projects/portfolio.jpg",
    github: "https://github.com/yourrepo",
    status: "Ongoing"
  },
  {
    id: 3,
    title: "E-Commerce UI",
    category: "uiux",
    description: "UI design for an online store.",
    tech: ["Figma"],
    image: "/figma.png",
    github: "",
    status: "Completed"
    
  } 
  
];

function Projects() {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter(p => p.category === filter);

  return (
    <section className="projects">

      <h2 className="projects-title">My Projects</h2>

      {/* FILTER BUTTONS */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("web")}>Web</button>
        <button onClick={() => setFilter("java")}>Java</button>
        <button onClick={() => setFilter("uiux")}>UI/UX</button>
      </div>

      {/* PROJECT CARDS */}
      <div className="projects-grid">

        {filteredProjects.map(project => (
          <div
            className="project-card"
            key={project.id}
            onClick={() => navigate(`/project/${project.id}`)}
          >

            {/* IMAGE */}
            <div className="image-box">

              <img src={project.image} alt={project.title} />

              {/* GITHUB ICON */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-icon"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub />
                </a>
              )}

              {/* STATUS BADGE */}
              {project.status === "Ongoing" && (
                <div className="badge">Ongoing</div>
              )}

            </div>

            {/* CONTENT */}
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;