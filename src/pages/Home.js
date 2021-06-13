import React from "react";
import Container from "react-bootstrap/Container";

import "./Home.css";
import Cover from "../images/cover.png";

import AboutIcon from "../images/abouticon.png";
import ProjectsIcon from "../images/projectsicon.png";
import CommuteIcon from "../images/commuteicon.png";
import NewsIcon from "../images/newsicon.png";
import EventsIcon from "../images/eventsicon.png";
import CrimeIcon from "../images/crimeicon.png";

import Image from "react-bootstrap/Image";
// import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div>
      <Container fluid>
        <div className="title">
          <h1>Home Page</h1>
          <hr />
        </div>
        <div className="frame">
          <Image src={Cover} alt="cover" fluid />
          <div className="words">
            <mark>Welcome to Smart+</mark>
          </div>
        </div>
      </Container>
      <br />
      <Container>
        <div>
          <h2>
            <u>Vision:</u>
            <div className="para">
              <p>
                Cyberjaya Smart+ serves as an innovative portal which allows
                citizens to contribute, find out and improve the city that we
                all have grown to know and love. Within this portal there are
                many features all of which aim at improving the quality of life
                of fellow citizens. Click one of the buttons below to get
                started.
              </p>
            </div>
          </h2>
        </div>
        <div>
          <a href="/about" className="button" alt="about">
            <img src={AboutIcon} width="48" height="48" alt="about icon" />
            About Us
          </a>
          <a href="/projects" className="button" alt="projects">
            <img
              src={ProjectsIcon}
              width="48"
              height="48"
              alt="projects icon"
            />
            Projects
          </a>
          <a href="/commute" className="button" alt="commute">
            <img src={CommuteIcon} width="48" height="48" alt="commute icon" />
            Commute
          </a>
          <a href="/news" className="button" alt="news">
            <img src={NewsIcon} width="48" height="48" alt="news icon" />
            News
          </a>
          <a href="/events" className="button" alt="events">
            <img src={EventsIcon} width="48" height="48" alt="events icon" />
            Events
          </a>
          <a href="/crime" className="button" alt="crime">
            <img src={CrimeIcon} width="48" height="48" alt="crime icon" />
            Crime
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Home;
