import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";

function Menubar() {
  const [expanded, setExpanded] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
    setShowDropdown(false);
  };

  return (
    <Navbar
      sticky="top"
      expand="lg"
      className="custom-navbar"
      variant="dark"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-logo" onClick={handleNavClick}>
          <h1>Sree Infinity Tech</h1>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded((prev) => !prev)}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavClick}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleNavClick}>About</Nav.Link>

            <NavDropdown
              title="Services"
              id="services-dropdown"
              menuVariant="dark"
              show={showDropdown}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <NavDropdown.Item as={Link} to="/service/software development" onClick={handleNavClick}>
                Software Development
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service/web development" onClick={handleNavClick}>
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service/app development" onClick={handleNavClick}>
                App Development
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service/digital marketing" onClick={handleNavClick}>
                Digital Marketing
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/work delivered" onClick={handleNavClick}>
              Work Delivered
            </Nav.Link>
            <Nav.Link as={Link} to="/contact us" onClick={handleNavClick}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;
