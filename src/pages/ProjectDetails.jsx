import { useParams, useNavigate } from "react-router-dom"
import { FaGithub } from "react-icons/fa"
import "../styles/projectDetails.css"

// SAME DATA (IMPORTANT: we reuse your existing projects)
const projectsData = [
  {
    id: 1,
    title: "Student Marks System",
    category: "java",
    description: "A Java-based student marks management system.",
    tech: ["Java", "OOP"],
    image: "/project.png",
    github: "https://github.com/yourrepo",
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
]

function ProjectDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  // find project by id
  const project = projectsData.find(
    (p) => p.id === parseInt(id)
  )

  if (!project) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Project not found</h2>
        <button onClick={() => navigate("/projects")}>
          Back to Projects
        </button>
      </div>
    )
  }

  return (
    <div className="project-details">

      {/* BACK BUTTON */}
      <button
        className="back-btn"
        onClick={() => navigate("/projects")}
      >
        ← Back
      </button>

      {/* TITLE */}
      <h1>{project.title}</h1>

      {/* IMAGE */}
      <div className="details-image">
        <img src={project.image} alt={project.title} />
      </div>

      {/* STATUS */}
      <p className={`status ${project.status.toLowerCase()}`}>
        {project.status}
      </p>

      {/* DESCRIPTION */}
      <p className="description">
        {project.description}
      </p>

      {/* TECH STACK */}
      <div className="tech-stack">
        <h3>Tech Stack</h3>
        <div className="tech-list">
          {project.tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      {/* LINKS */}
      <div className="links">

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            <FaGithub /> GitHub
          </a>
        )}

      </div>

    </div>
  )
}

export default ProjectDetails