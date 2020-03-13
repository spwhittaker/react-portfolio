import React from "react";
import "../Styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="top-bar">
      <nav>
        <a href="index.html" alt="Home">
          Home
        </a>
        <a href="about.html" alt="About me">
          About me
        </a>
        <a
          href="https://github.com/spwhittaker"
          alt="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/spwhittaker1"
          alt="My Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Twitter
        </a>

        <a
          href="mailto:stephenwhittaker23@gmail.com"
          alt="Get in touch"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in touch
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
