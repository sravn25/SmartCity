import React from "react";
import "./DropdownStyles.css";
// import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Container from "react-bootstrap/Container";

const Navbar = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="menus" variant="#f2f2f2">
          <img src="asd.png" alt="icon" />
        </Dropdown.Toggle>

        <Dropdown.Menu variant="secondary">
          <Dropdown.Item href="/" active>
            Home
          </Dropdown.Item>
          <Dropdown.Item href="#2" active>
            About Us
          </Dropdown.Item>
          <Dropdown.Item href="#3" active>
            Projects
          </Dropdown.Item>
          <Dropdown.Item href="#4" active>
            Commute
          </Dropdown.Item>
          <Dropdown.Item href="#5" active>
            News
          </Dropdown.Item>
          <Dropdown.Item href="#6" active>
            Events
          </Dropdown.Item>
          <Dropdown.Item href="#7" active>
            Crime
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* 
      <Nav
        className="justify-content-end"
        activeKey="default"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="default">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="4">Commute</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="5">News</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="6">Events</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="7">Crime</Nav.Link>
        </Nav.Item>
      </Nav>
      */}
    </>
  );
};

export default Navbar;
