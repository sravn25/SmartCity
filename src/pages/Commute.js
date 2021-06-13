import React, { useState } from "react";

import "./CommuteStyles.css";

import Trainlines from "../images/trainlines.png";
import BusRoutes from "../images/busroutes.png";
import CarMap from "../images/map.png";

import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
// import ModalBody from "react-bootstrap/ModalBody";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Commute = () => {
  const [train, setTrain] = useState(false);
  const [bus, setBus] = useState(false);
  const [car, setCar] = useState(false);

  const hideTrain = () => setTrain(false);
  const showTrain = () => setTrain(true);

  const hideBus = () => setBus(false);
  const showBus = () => setBus(true);

  const hideCar = () => setCar(false);
  const showCar = () => setCar(true);

  return (
    <div>
      <Container fluid>
        <div className="header">
          <h1>Commute</h1>
          <p>Why struggle when commuting when you can travel Smart+?</p>
        </div>
      </Container>
      <Container fluid>
        <hr className="styles" />
        <Row>
          <Col xs={0} md={1}></Col>
          <Col xs={6} md={5}>
            <h3>
              <u>By Train</u>
            </h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col xs={6} md={5}>
            <div style={{ textAlign: "center", marginTop: 30 }}>
              <Image
                fluid
                src={Trainlines}
                width="300px"
                height="300px;"
                alt="Trainlines"
                onClick={showTrain}
              />
              <Modal show={train} onHide={hideTrain}>
                <Modal.Body>
                  <img src={Trainlines} alt="Trainlines" />
                </Modal.Body>
              </Modal>
            </div>
          </Col>
          <Col xs={0} md={5}></Col>
        </Row>
        <hr className="styles" />
      </Container>
      <Container fluid>
        <Row>
          <Col xs={0} md={1}></Col>
          <Col xs={6} md={5}>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Image
                fluid
                src={BusRoutes}
                width="400px"
                height="4000x;"
                alt="buslines"
                onClick={showBus}
              />
              <Modal show={bus} onHide={hideBus}>
                <Modal.Body>
                  <Image
                    fluid
                    src={BusRoutes}
                    alt="buslines"
                    styles={{ textAlign: "center" }}
                  />
                </Modal.Body>
              </Modal>
            </div>
          </Col>
          <Col xs={6} md={5}>
            <h3>
              <u>By Bus</u>
            </h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col xs={0} md={5}></Col>
        </Row>
        <hr className="styles" />
      </Container>
      <Container fluid>
        <Row>
          <Col xs={0} md={1}></Col>
          <Col xs={6} md={5}>
            <h3>
              <u>By Car</u>
            </h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col xs={6} md={5}>
            <div style={{ textAlign: "center", marginTop: 30 }}>
              <Image
                fluid
                src={CarMap}
                width="300px"
                height="300px;"
                alt="Trainlines"
                onClick={showCar}
              />
              <Modal show={car} onHide={hideCar}>
                <Modal.Body>
                  <img src={CarMap} alt="Car map" />
                </Modal.Body>
              </Modal>
            </div>
          </Col>
          <Col xs={0} md={5}></Col>
        </Row>
        <hr className="styles" />
      </Container>
    </div>
  );
};

export default Commute;
