import React from 'react'

import '../styles/footer.css'

function Footer () {
  return (
        <footer className="footer">
      <div className="footer-content">
        

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/chathurya-dhananjani-898115314/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>

          <a href="https://github.com/Chathurya1111" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>

          <a href="https://www.instagram.com/cciaannaaa?igsh=MWpkYXEwNG94aHJlcg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
