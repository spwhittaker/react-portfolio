import React from "react";
import "../Styles/NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <Link className="item" to="/">
          Home
        </Link>
        <Link className="item" to="/about">
          About me
        </Link>

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

        <Link className="item" to="/contact" alt="Get in touch">
          Get in touch
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
