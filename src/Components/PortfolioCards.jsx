import React from "react";
import PortfolioCard from "./PortfolioCard";

const PortfolioCards = ({ cards }) => {
  return (
    <div className="PortfolioCards">
      {cards.map(card => (
        <PortfolioCard
          link={card.link}
          portfolioImage={card.portfolioImage}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default PortfolioCards;
