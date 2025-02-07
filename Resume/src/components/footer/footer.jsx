import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 ResumeBuilder Pro</p>
      <nav className="footer-nav">
        <a href="/about">About Us</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="footer-social">
        <a href="https://www.facebook.com/yourprofile">Facebook</a>
        <a href="https://www.twitter.com/yourprofile">Twitter</a>
        <a href="https://www.linkedin.com/yourprofile">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
