import React from "react";
import "../Styles/PortfolioCard.scss";
const PortfolioCard = ({ link, portfolioImage, title, description }) => {
  return (
    <div className="portfolio-card">
      <h3>
        <a href={link}>{title}</a>
      </h3>
      <a href={link}>
        <p className="description">{description}</p>
      </a>
      <a href={link}>
        <img src={portfolioImage} alt={title} className="portfolio-image" />
      </a>
    </div>
  );
};

export default PortfolioCard;
