import { Link } from "react-router-dom";
import "../styles/home.css";
import logo from "../assets/logo.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <section className="home">

      {/* BACKGROUND SHAPES */}
      <div className="bg-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
      </div>

      {/* RIGHT SIDE (IMAGE FIRST ON MOBILE) */}
      <div className="home-right">
        <div className="image-bg-shape"></div>
        <img src={logo} alt="Profile" />
      </div>

      {/* LEFT SIDE */}
      <div className="home-left">

        <p className="hi-text">Hi!</p>

        <h1 className="name">
          I'm Chathurya Wijayathilake
        </h1>

        <p className="description">
          Passionate about building beautiful, functional, and user-friendly digital experiences.
        </p>

        {/* TYPEWRITER */}
        <h3 className="typing">
          <Typewriter
            words={[
              "Full Stack Developer",
              "Graphic Designer",
              "UI/UX Designer",
              "Frontend Developer"
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </h3>

        {/* BUTTONS */}
        <div className="buttons">
          <a
            href="/Chathurya Dhananjani CV.pdf"
            download="Chathurya-CV.pdf"
            className="btn primary"
          >
            Download CV
          </a>

          <Link to="/contact" className="btn secondary">
            Contact Me
          </Link>
        </div>

        {/* SOCIALS */}
        <div className="socials">
          <a href="https://www.linkedin.com/in/chathurya-dhananjani-898115314/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://github.com/Chathurya1111" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>

      </div>

    </section>
  );
}

export default Home;