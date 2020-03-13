import React from "react";
import PortfolioCards from "./PortfolioCards";
import "../Styles/PortfolioCards.css";
import "../Styles/IndexMain.css";
import reddishPhoto from "../Images/reddishvaleme.jpg";

const projects = [
  {
    title: "Pizzarithmetic",
    description: "A pizza value calculator",
    link: "https://pizza-maths.now.sh/",
    portfolioImage:
      "https://res.cloudinary.com/spwhittaker/image/upload/v1584033879/pizza_ib8xge.jpg"
  },
  {
    title: "Weather App",
    description: "Five-day weather forecast app",
    link: "https://github.com/spwhittaker/best-weather-app",
    portfolioImage:
      "https://res.cloudinary.com/spwhittaker/image/upload/v1584037392/Screenshot_from_2020-03-12_18-22-19_bvexng.png"
  },
  {
    title: "Music Library API",
    description: "API using MongoDB for storing a music collection",
    link: "https://github.com/spwhittaker/music-library-api",
    portfolioImage:
      "https://res.cloudinary.com/spwhittaker/image/upload/v1584088511/photo-1487215078519-e21cc028cb29_sjewoy.jpg"
  },
  {
    title: "Virtual Pet",
    description:
      "A program to create a virtual pet, similar to but legally distinct from a Tamagotchi",
    link: "https://github.com/spwhittaker/virtual-pet",
    portfolioImage:
      "https://res.cloudinary.com/spwhittaker/image/upload/v1584038025/600px-thumbnail_gbjtm5.jpg"
  }
];

const IndexMain = () => {
  return (
    <main className="indexMain">
      <div className="photo-and-title">
        <img
          src={reddishPhoto}
          alt="Me at Reddish Vale"
          className="profile-photo"
          title="Here's a picture of me at Reddish Vale Country Park"
        />
        <div>
          {" "}
          <h1>Stephen Whittaker</h1>
          <h2>My Portfolio</h2>
          <h2>Hello, and welcome to my portfolio page.</h2>
        </div>
      </div>
      <h3>Here is some of the stuff that I've done so far:</h3>

      <h3>These are some of my projects</h3>
      <PortfolioCards cards={projects} />
    </main>
  );
};

export default IndexMain;
