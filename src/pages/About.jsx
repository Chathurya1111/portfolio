import "../styles/about.css";

function About() {
  return (
    <section className="about">

      <h2 className="about-title">About Me</h2>

      <div className="about-container">

        {/* LEFT - WHO I AM CARD */}
        <div className="about-left">

          <div className="info-card">
            <h3>Who I Am</h3>

            <p>
              I am a passionate full stack developer who enjoys building
              modern, clean, and user-friendly web applications.
            </p>

            <p>
              I love turning ideas into real digital experiences and
              continuously improving my skills in frontend and backend development.
            </p>
          </div>

        </div>

        {/* RIGHT - TECH STACK */}
        <div className="about-right">

          <h3>Tech Stack</h3>

          <div className="stack-card">
            <h4>Frontend</h4>
            <div className="tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </div>

          <div className="stack-card">
            <h4>Backend</h4>
            <div className="tags">
              <span>Java</span>
              <span>Python</span>
              <span>Node.js</span>
              <span>JSP</span>
              <span>Servlets</span>
            </div>
          </div>

          <div className="stack-card">
            <h4>Database</h4>
            <div className="tags">
              <span>MySQL</span>
              <span>MongoDB</span>
            </div>
          </div>

          <div className="stack-card">
            <h4>Tools</h4>
            <div className="tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>Figma</span>
              <span>Photoshop</span>
              <span>Illustrator</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;