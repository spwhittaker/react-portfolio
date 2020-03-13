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
    <main id="indexMain">
      <h1>Stephen Whittaker</h1>
      <h2>My Portfolio</h2>
      <img
        src={reddishPhoto}
        alt="Me at Reddish Vale"
        className="profile-photo"
        title="Here's a picture of me at Reddish Vale Country Park"
      />
      <h2>Hello, and welcome to my portfolio page.</h2>
      <ul>
        <h3>Here is some of the stuff that I've done so far:</h3>
        <li>
          This is the{" "}
          <a
            href="https://spwhittaker.github.io/html-scrapbook/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML Scrapbook
          </a>
          , where I first put some HTML together. It looks disgusting,{" "}
          <em>but</em> it's helping me to learn
        </li>
        <li>
          Here is{" "}
          <a
            href="https://github.com/spwhittaker/Bus-Pass-stuff"
            alt="Bus Pass repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            a bit of JavaScript
          </a>{" "}
          that works out how much you'd save by getting a bus season pass
          instead of day savers
        </li>
        <li>
          This is{" "}
          <a
            href="https://github.com/spwhittaker/buy-phones"
            alt="Buy phones repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            a solution
          </a>{" "}
          I wrote to a challenge in{" "}
          <a
            href="https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/getting-started/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            this fantastic ebook
          </a>{" "}
          by Kyle Simpson
        </li>
        <li>
          Here is the{" "}
          <a
            href="https://spwhittaker.github.io/my-first-webpage/"
            alt="My first website"
          >
            first webpage
          </a>{" "}
          that I made
        </li>
      </ul>
      <h3>These are a couple of the webpages I have put together</h3>
      <PortfolioCards cards={projects} />
      {/* <div id="cardBoxBox">
        <div className="cardBox">
          <div className="card">
            <a
              href="https://spwhittaker.github.io/html-scrapbook/"
              target="_blank"
              rel="noopener noreferrer"
            >
              
              <div className="card-heading">My HTML scrapbook</div>
              <img
                className="screenshot"
                src={htmlScrapbookScreenshot}
                alt="html scrapbook screenshot"
              />
            </a>
          </div>
          <div className="card">
            <a
              href="https://spwhittaker.github.io/my-first-webpage/"
              alt="My first website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hello World". It's the first webpage I made.
              <div className="card-heading"></div>
              <img
                className="screenshot"
                src={myFirstWebpagePhoto}
                alt="my first webpage screenshot"
              />
            </a>
          </div>
        </div>
  </div> */}
    </main>
  );
};

export default IndexMain;
