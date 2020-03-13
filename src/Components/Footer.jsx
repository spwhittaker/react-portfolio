import React from "react";
import "../Styles/Footer.css";
const Footer = () => {
  return (
    <footer>
      <p>
        <a href="#top" alt="Top of the Page">
          Go to Top
        </a>
      </p>
      <p>Copyright&copy; 2019-2020 Stephen Whittaker</p>
      <p>
        <a
          href="mailto:stephenwhittaker23@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          alt="Get in touch"
        >
          Contact
        </a>
      </p>
    </footer>
  );
};

export default Footer;
