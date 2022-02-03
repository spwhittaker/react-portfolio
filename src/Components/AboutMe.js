import React from "react";
import "../Styles/AboutMe.scss";
const AboutMe = () => {
  return (
    <main className='AboutMe'>
      <section class='bio'>
        <h2>A little about me</h2>
        <p>
          Hi, my name is Stephen Whittaker. I attended the coding bootcamp at{" "}
          <a
            href='https://www.manchestercodes.com/'
            alt='Manchester Codes site'
            target='_blank'
            rel='noopener noreferrer'
          >
            Manchester Codes
          </a>{" "}
          from September 2019 to March 2020. I like figuring out how things work
          and making processes more efficient. I like writing code that is
          useful or just silly. I love working out problems, like{" "}
          <a href='https://www.codewars.com/'>Codewars</a> and{" "}
          <a href='https://projecteuler.net/'>Project Euler</a>. I have studied
          JavaScript, React, React-Native, ExpressJS and MongoDB, which I've
          used to build projects that you can find at my{" "}
          <a href='https://github.com/spwhittaker'>GitHub</a>.
        </p>
        <p>
          I play the drums and love watching live bands, I read a fair bit
          (science-fiction, science non-fiction, other fiction...) and play
          roguelike platformer games obsessively. I like installing weird mods
          on games and tinkering with stuff until it breaks (then spending hours
          fixing it). I have a couple of Raspberry Pis, which I've used for a
          media server and a network-wide ad-blocker, but I'm always looking for
          ideas of other fun projects to try.
        </p>
      </section>
      <a
        alt='my last.fm profile'
        href='https://www.last.fm/user/constantwirkle'
        target='_blank'
        rel='noopener noreferrer'
      >
        <button type='button'>
          Here's some of the music and podcasts I've been listening to.
        </button>
      </a>
      <h3>These are a few bits of origami I've made:</h3>
      <section id='coolOrigami'>
        <div class='photoBox'>
          <caption class='card-header'>
            A lobster, with plectrum for scale
          </caption>
          <img
            src='https://res.cloudinary.com/spwhittaker/image/upload/v1584033873/lobster_vgr71h.jpg'
            alt='Origami Lobster'
          />
        </div>
        <div class='photoBox'>
          <caption class='card-header'>A kangaroo</caption>
          <img
            src='https://res.cloudinary.com/spwhittaker/image/upload/v1584033872/kangaroo_afykv3.jpg'
            alt='Origami Kangaroo'
          />
        </div>
        <div class='photoBox'>
          <caption class='card-header'>A dragon with three heads</caption>
          <img
            src='https://res.cloudinary.com/spwhittaker/image/upload/v1584033873/dragon_fbpon4.jpg'
            alt='Origami Three-headed Dragon'
          />
        </div>
        <div class='photoBox'>
          <caption class='card-header'>A horse</caption>
          <img
            src='https://res.cloudinary.com/spwhittaker/image/upload/v1584033874/horse_qtogft.jpg'
            alt='Origami horse'
          />
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
