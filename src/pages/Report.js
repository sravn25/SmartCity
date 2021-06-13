import React from "react";

import Form from "../components/Form";

import "./Report.css";
import Pothole from "../images/pothole.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Crime = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={0} md={2}></Col>
        <Col xs={12} md={8}>
          <div style={{ marginTop: 40 }}>
            <h1>Crime</h1>
          </div>
          <hr />
          <Image fluid src={Pothole} alt="pothole" width={500} height={500} />
          <p className="para">
            Report issues you have faced in the city
            <ul>
              <li>Have you noticed anything life threatening?</li>
              <li>Are you looking to report about a pothole on the road?</li>
              <li>Do you feel unsafe in this city?</li>
              <li>Noticed stray animals in need of help?</li>
            </ul>{" "}
          </p>
          Write them down here :-
          <Form />{" "}
        </Col>
        <Col xs={0} md={2}></Col>
      </Row>
    </Container>
  );
};

export default Crime;
