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
        <Dropdown.Toggle id="menus" variant="">
          <div>
            <h4>Menus</h4>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu variant="success">
          <Dropdown.Item href="/" active>
            Home
          </Dropdown.Item>
          <Dropdown.Item href="/about" active>
            About Us
          </Dropdown.Item>
          <Dropdown.Item href="/projects" active>
            Projects
          </Dropdown.Item>
          <Dropdown.Item href="/commute" active>
            Commute
          </Dropdown.Item>
          <Dropdown.Item href="/news" active>
            News
          </Dropdown.Item>
          <Dropdown.Item href="/events" active>
            Events
          </Dropdown.Item>
          <Dropdown.Item href="/report" active>
            Report
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
