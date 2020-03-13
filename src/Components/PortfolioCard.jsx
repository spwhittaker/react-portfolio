import React from "react";
import "../Styles/PortfolioCard.css";
const PortfolioCard = ({ link, portfolioImage, title, description }) => {
  return (
    <div className="portfolio-card">
      <div className="flex-container">
        <h3>
          <a href={link}>{title}</a>
        </h3>
        <p>{description}</p>
        <img src={portfolioImage} alt={title} className="portfolio-image" />
      </div>
    </div>
  );
};

export default PortfolioCard;
