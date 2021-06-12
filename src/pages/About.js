import React, { Component } from "react";

import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "./About.css";

import ApplyForm from "../components/ApplyForm";

export default class About extends Component {
  render() {
    return (
      <Container>
        <div className="intro">
          <h1>About Us</h1>
        </div>
        <br />
        <h3>Change begins with you the people</h3>
        <p className="text">
          In today’s day and age our current lifestyles and habits are
          unsustainable, with forests in decline, animals facing extinction,
          rising carbon dioxide levels and increase in pollution the future is
          starting to look bleak. It’s an endless cycle where cities clear out
          forests to make way for urban growth. In order to lessen the effects
          of such changes we have to look for new and innovative ways in order
          to keep up with the rapid growth. In regard to this smart cities have
          been implemented in countries world wide ranging from Singapore to
          India and from America to Thailand. Due to the success of such cities,
          Cyberjaya Smart+ is responsible for doing the same to malaysia. Our
          platform is state of the art and allows users or residents to perform
          actions that will contribute to the city as a whole especially via the
          projects, travels, news, events and crime to name a few.
        </p>
        <hr />
        <h3>Innovation</h3>
        <p className="text">
          Through the use of Cyberjaya Smart+ users will be able to do one of 6
          things.
          <ol>
            <li>Find out more about Cyberjaya Smart+</li>
            <li>
              Find out about ongoing and completed projects along with
              submitting projects.
            </li>{" "}
            <li>
              Find out about the most convenient and fast ways to travel around
              cyberjaya without costing much.
            </li>{" "}
            <li>Find out the latest news ongoing in Cyberjaya.</li>
            <li> Get the latest information about events around Cyberjaya.</li>
          </ol>
        </p>
        <hr />
        <h3>Support Us</h3>
        <p className="text">
          Support us by donating to us via one of the links below
          Patreon/Kickstarter/Paypal
        </p>
        <hr />
        <h3>Contact Us</h3>
        <p className="text">
          For those who are interested in being part of the team / community do
          apply to be a member of our growing group below.
        </p>
        <ApplyForm />
      </Container>
    );
  }
}
