// components/Footer.js

import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* Footer sections */}
      <div className="footer-section">
        <h3>About</h3>
        <ul>
          <li>How Ventur works</li>
          <li>Newsroom</li>
          {/* ... */}
        </ul>
      </div>

      <div className="footer-section">
        <h3>Community</h3>
        <ul>
          <li>Diversity & Belonging</li>
          <li>Accessibility</li>
          {/* ... */}
        </ul>
      </div>

      {/* ... you can add more sections as needed */}

      {/* Social media icons, copyright text, etc. */}
      <div className="footer-bottom">
        <div className="social-icons">
          {/* Add social media icons or links here */}
        </div>
        <p>&copy; 2023 Ventur, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
