// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-sections">
          <div className="footer-section">
            <h3>EmpowerHer</h3>
            <p>
              Empowering women entrepreneurs through accessible skills training.
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/courses">Courses</a>
              </li>
              <li>
                <a href="/resources">Resources</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@empowerher.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} EmpowerHer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
