import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <img src={logo} alt="My Logo" />
        <h2>Chathurya</h2>
      </div>

      {/* DESKTOP LINKS */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>

        <li>
          <a
            href="/Chathurya Dhananjani CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-btn"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

        <a
          href="/Chathurya Dhananjani CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cv-btn"
        >
          Resume
        </a>
      </div>

    </nav>
  );
}

export default Navbar;