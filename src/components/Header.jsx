// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h1>EmpowerHer</h1>
            <p>Skills for Women Entrepreneurs</p>
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
