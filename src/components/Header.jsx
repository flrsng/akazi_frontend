import React from "react";
import "../css/header.css"; // Make sure this CSS file is in the same folder

const Header = () => {
  return (
    <header className="header">
      {/* Left: Logo */}
      <div className="logo">
        <img src="/akazi_logo.png" alt="Logo" />
      </div>

      {/* Center: Navigation */}
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/jobs">Jobs</a>
        <a href="/applications">Applications</a>
        <a href="/about">About Us</a>
      </nav>

      {/* Right: Login */}
      <div className="login">
        <button>Login</button>
      </div>
    </header>
  );
};

export default Header;
