import React from "react";
import "../Styles/PortfolioCard.scss";
const PortfolioCard = ({ link, portfolioImage, title, description }) => {
  return (
    <a href={link} class='card-link'>
      <div className='portfolio-card'>
        <h3>
          <a href={link}>{title}</a>
        </h3>
        <a href={link} className='description'>
          <p>{description}</p>
        </a>
        <a href={link}>
          <img src={portfolioImage} alt={title} className='portfolio-image' />
        </a>
      </div>
    </a>
  );
};

export default PortfolioCard;
