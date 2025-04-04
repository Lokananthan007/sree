import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";

function Menubar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Navbar sticky="top" expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-logo">
          <h1>Sree Infinity Tech</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>

            <NavDropdown
              title="Services"
              id="services-dropdown"
              menuVariant="dark"
              show={showDropdown}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <NavDropdown.Item as={Link} to="/services">Software Development</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services">Web Development</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services">App Development</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services">Digital Marketing</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;
