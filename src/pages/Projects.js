import React, { useState } from "react";
import Countup from "react-countup";

import ProposalForm from "../components/ProposalForm";

import "./Projects.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
// import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

import SmartBus from "../images/smartbus.png";
import ThreeTrees from "../images/teamtrees.png";
import Umbrella from "../images/umbrellastation.png";

const Projects = () => {
  const projects = {
    ongoing: [
      "Smart bus",
      "Three trees",
      "Umbrella Station",
      "Development Workshop",
      "Repaint Project",
      "Reroad Project",
      "Degraffiti",
    ],
    submitted: [
      "hidden 1",
      "hidden 2",
      "hidden 3",
      "hidden 4",
      "hidden 5",
      "hidden 6",
      "hidden 7",
      "hidden 8",
      "hidden 9",
      "hidden 10",
    ],
    completed: ["Establishment of the Smart website"],
    completedLink: ["https://google.com"],
    slide: {
      image: [
        <Image style={{ height: 464 }} src={SmartBus} alt="smartbus" fluid />,
        <Image
          style={{ height: 464 }}
          src={ThreeTrees}
          alt="Three trees"
          fluid
        />,
        <Image
          style={{ height: 464 }}
          src={Umbrella}
          alt="umbrella station"
          fluid
        />,
      ],
      title: ["Smart Bus", "Three Trees", "Umbrella Station"],
      caption: [
        "Lorem Smart Bus sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "Lorem ipsum Three Trees amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "Lorem ipsum dolor Umbrella Station, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      ],
      link: [
        <Button
          href="https://www.smartbus.org/"
          rel="noreferrer"
          target="_blank"
          alt="smart bus"
          variant="secondary"
        >
          Learn More &rarr;
        </Button>,
        <Button
          href="https://teamtrees.org/"
          rel="noreferrer"
          target="_blank"
          alt="team trees"
          variant="secondary"
        >
          Learn More &rarr;
        </Button>,
        <Button
          href="https://aspen.com.my/redefine_community/umbrella-sharing-initiative/"
          rel="noreferrer"
          target="_blank"
          alt="umbrella sharing"
          variant="secondary"
        >
          Learn More &rarr;
        </Button>,
      ],
    },
  };

  const [index, setIndex] = useState(0);
  //const [submit, setSubmit] = useState(projects.submitted.length);
  const [visible, setVisible] = useState(false);

  const nextImage = () => {
    console.log("Next Image");
    const maximum = index === projects.slide.image.length - 1 ? true : false;
    setIndex(maximum ? 0 : index + 1);
  };

  const prevImage = () => {
    console.log("Previous Image");
    const minimum = index === 0 ? true : false;
    setIndex(minimum ? projects.slide.image.length - 1 : index - 1);
  };

  return (
    <>
      <div className="projects">
        <Container fluid>
          <h1>Projects</h1>
          <hr />
          <Row>
            <Col>
              <Button variant="success" href="#completed" size="lg">
                Completed{" "}
                <Badge variant="light">
                  <Countup
                    delay={1}
                    end={projects.completed.length}
                    duration={5}
                  ></Countup>
                </Badge>
              </Button>
            </Col>
            <Col>
              <Button variant="success" href="#submitted" size="lg">
                Submitted{" "}
                <Badge variant="light">
                  <Countup
                    delay={1}
                    end={projects.submitted.length}
                    duration={5}
                  ></Countup>
                </Badge>
              </Button>
            </Col>
            <Col>
              <Button variant="success" href="#ongoing" size="lg">
                Ongoing{" "}
                <Badge variant="light">
                  <Countup
                    delay={1}
                    end={projects.ongoing.length}
                    duration={5}
                  ></Countup>
                </Badge>
              </Button>
            </Col>
          </Row>
        </Container>
        <hr />
      </div>
      <Container fluid>
        <div id="ongoing">
          <h2>
            <u>Ongoing Projects</u>
          </h2>
          <br />
          <br />
          <Row>
            <Col>{projects.slide.image[index]}</Col>
            <Col>
              <h3>{projects.slide.title[index]}</h3>
              <br />
              {projects.slide.caption[index]}
              <br />
              <br />
              {projects.slide.link[index]}
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={{ textAlign: "center" }}>
                <Button variant="primary" onClick={prevImage}>
                  &larr;
                </Button>
                <Button variant="success" onClick={nextImage}>
                  &rarr;
                </Button>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </Container>
      <hr />
      <Container fluid>
        <div id="completed">
          <h2>
            <u>Completed Projects</u>
          </h2>
          <ol>
            <li>
              <h4>
                <a
                  href={projects.completedLink[0]}
                  rel="noreferrer"
                  target="_blank"
                >
                  {projects.completed[0]} &rarr;
                </a>
              </h4>
            </li>
          </ol>
        </div>
      </Container>
      <hr />
      <Container fluid>
        <div id="submitted">
          <h2>
            <u>Submissions</u>
          </h2>
          <Row>
            <Col>
              <p>
                There are currently {projects.submitted.length} proposed
                projects waiting for reviewal! <br />
                Do you wish to join the fun and express your creativity, while
                helping out in achieving a Smart and Sustainable City? <br />
                You can expand the form and submit your ideas!
              </p>
              <Button
                variant="success"
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                Expand
              </Button>
            </Col>
            <Col>{visible ? <ProposalForm /> : null}</Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Projects;
