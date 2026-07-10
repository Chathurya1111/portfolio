import { useState } from "react";
import "../styles/projects.css";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const projectsData = [
  
  {
   
    id: 1,
    title: "Personal Portfolio Website",
    category: "web",
    description: "A responsive personal portfolio website designed and developed to showcase my projects, technical skills, experience, and UI/UX design capabilities.",
    tech: ["React", "Vite", "JavaScript", "CSS"],
    image: "/portfolio.png",
    github: "https://github.com/Chathurya1111/portfolio.git",
    status: "Completed"
  },
  {
   
    id: 2,
    title: "Event Management UI",
    category: "uiux",
    description: "A modern UI/UX design concept for an event management platform that allows users to discover, organize, and manage events easily.",
    tech: ["Figma", "UI Design", "UX Research", "Prototyping"],
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