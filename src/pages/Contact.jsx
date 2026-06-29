import "../styles/contact.css";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">

      {/* TITLE */}
      <h2 className="contact-title">Contact Me</h2>

      <p className="contact-subtitle">
        Feel free to reach me through any of the platforms below. 
        Whether you have a project idea, collaboration opportunity, 
        internship offer, or just want to say hello, I'd love to hear from you.
      </p>

      {/* CONTACT CARDS */}
      <div className="contact-cards">

        <div className="contact-card">
          <h3>Email</h3>
          <p>chathuryadhananjani@gmail.com</p>
          <a href="mailto:chathuryadhananjani@gmail.com">
            Send Email
          </a>
        </div>

        <div className="contact-card">
          <h3>Phone</h3>
          <p>+94 763466769</p>
          <a href="tel:+94773466769">Call Now</a>
        </div>

        <div className="contact-card">
          <h3>LinkedIn</h3>
          <p>Professional Profile</p>
          <a
            href="https://www.linkedin.com/in/chathurya-dhananjani-898115314/"
            target="_blank"
            rel="noreferrer"
          >
            Visit Profile
          </a>
        </div>

        <div className="contact-card">
          <h3>GitHub</h3>
          <p>Projects & Code</p>
          <a
            href="https://github.com/Chathurya1111"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
        </div>

      </div>

      {/* SOCIAL ICONS */}
      <div className="social-section">
        <h3>Connect With Me</h3>

        <div className="social-icons">
          <a href="https://wa.me/+94763466769" target="_blank"><FaWhatsapp /></a>
          <a href="https://www.instagram.com/cciaannaaa?igsh=MWpkYXEwNG94aHJlcg%3D%3D&utm_source=qr" target="_blank"><FaInstagram /></a>
          <a href="https://www.facebook.com/share/1E2ZNvFXqH/?mibextid=wwXIfr" target="_blank"><FaFacebook /></a>
        </div>
      </div>

      {/* FORM */}
      <div className="contact-form">
        <h3>Get In Touch</h3>

        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="5" placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

    </section>
  );
}

export default Contact;