import React from "react";
import "../Styles/Footer.scss";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  console.log(year);
  let copyrightString;
  if (year === 2019) {
    copyrightString = `Copyright © 2019 Stephen Whittaker`;
  } else {
    copyrightString = `Copyright © 2019 - ${year} Stephen Whittaker`;
  }

  return (
    <footer>
      <p>
        <a href="#top" alt="Top of the Page">
          Go to Top
        </a>
      </p>
      <p>{copyrightString}</p>
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
