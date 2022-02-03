import React from "react";
import PortfolioCards from "./PortfolioCards";
import "../Styles/PortfolioCards.scss";
import "../Styles/IndexMain.scss";
import myPhoto from "../Images/me.png";

const projects = [
  {
    title: "Country Tester",
    description:
      "Country info with dynamic colours from flags. Knowledge tester for countries, their capitals and flags.",
    link: "https://country-tester.vercel.app/",
    portfolioImage:
      "https://res.cloudinary.com/spwhittaker/image/upload/v1643901148/Screenshot_2022-02-03_at_15-12-01_Country_tester_bf1zhy.png",
  },
  {
    title: "No More Overscan!",
    description:
      "A site I made to show, interactively, how terrible overscan is on televisions",
    link: "https://no-more-overscan.vercel.app/",
    portfolioImage:
      "https://res.cloudinary.com/spwhittaker/image/upload/v1600079246/no-more-overscan_dm70ys.png",
  },
  {
    title: "Pizzarithmetic",
    description:
      "A pizza value calculator to get you the best value for money on your takeaway",
    link: "https://pizza-maths.now.sh/",
    portfolioImage:
      "https://res.cloudinary.com/spwhittaker/image/upload/v1600079341/pizzarithmetic_yul0b3.png",
  },
  {
    title: "Weather App",
    description: "Five-day weather forecast app",
    link: "https://github.com/spwhittaker/best-weather-app",
    portfolioImage:
      "https://res.cloudinary.com/spwhittaker/image/upload/v1584037392/Screenshot_from_2020-03-12_18-22-19_bvexng.png",
  },
  {
    title: "Music Library API",
    description: "API using MongoDB for storing a music collection",
    link: "https://github.com/spwhittaker/music-library-api",
    portfolioImage:
      "https://res.cloudinary.com/spwhittaker/image/upload/v1584088511/photo-1487215078519-e21cc028cb29_sjewoy.jpg",
  },
  {
    title: "Surreal Estate",
    description:
      "Mock real estate website, allows browsing and adding properties, using Express and MongoDB backend",
    link: "https://github.com/spwhittaker/surreal-estate",
    portfolioImage:
      "https://res.cloudinary.com/spwhittaker/image/upload/v1584107004/Screenshot_from_2020-03-13_13-42-24_mnxjxo.png",
  },
  {
    title: "Virtual Pet",
    description:
      "A program to create a virtual pet, similar to but legally distinct from a Tamagotchi",
    link: "https://github.com/spwhittaker/virtual-pet",
    portfolioImage:
      "https://res.cloudinary.com/spwhittaker/image/upload/v1584038025/600px-thumbnail_gbjtm5.jpg",
  },
];

const IndexMain = () => {
  return (
    <main className='indexMain'>
      <div className='photo-and-title'>
        <img
          src={myPhoto}
          alt='Me in Croatia'
          className='profile-photo'
          title="Here's a picture of me in Croatia"
        />
        <div>
          <h1>Stephen Whittaker</h1>
          <p>
            JavaScript developer based in Manchester. JavaScript, React,
            React-Native, ExpressJS, MongoDB.
          </p>
        </div>
      </div>

      <h2>My Portfolio</h2>
      <h3>These are some of my projects</h3>
      <PortfolioCards cards={projects} />
    </main>
  );
};

export default IndexMain;
