import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      {/* LOGO */}
      <div className="navbar-logo">
        <div className="navbar-logo-icon">
          🏥
        </div>

        <div>
          <h2>Swasthyaconnect</h2>
          <span>Healthcare for Everyone</span>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>

        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="#services" onClick={() => setMenuOpen(false)}>
          Services
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>

        <button
          className="navbar-login"
          onClick={() => alert("Login page will open here.")}
        >
          Login
        </button>

        <button
          className="navbar-signup"
          onClick={() => alert("Signup page will open here.")}
        >
          Sign Up
        </button>

      </nav>

      {/* MOBILE MENU BUTTON */}
      <button
        className="navbar-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

    </header>
  );
}

export default Navbar;