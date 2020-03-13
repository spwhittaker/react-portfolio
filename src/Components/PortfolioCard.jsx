import React from "react";
import "../Styles/PortfolioCard.css";
const PortfolioCard = ({ link, portfolioImage, title, description }) => {
  return (
    <div className="portfolio-card">
      <h3>
        <a href={link}>{title}</a>
      </h3>
      <p className="description">{description}</p>
      <img src={portfolioImage} alt={title} className="portfolio-image" />
    </div>
  );
};

export default PortfolioCard;
