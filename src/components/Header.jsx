import Dropdown from "./Dropdown";
import "./HeaderStyles.css";
import Logo from "../images/logo.png";
import Name from "../images/transparentName.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import React from "react";

const Header = () => {
  return (
    <div className="bg">
      <Container fluid>
        <Row>
          <Col xs>
            <div className="header">
              <img src={Logo} alt="logo" width="100px" height="100px" />
              <img src={Name} alt="name" width="480px" height="100px" />
            </div>
          </Col>
          <Col xs={2} md={1}>
            <div className="navbar">
              <Dropdown />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
