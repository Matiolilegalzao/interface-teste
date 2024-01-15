import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

const NavbarComponent = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Navbar collapseOnSelect expand="lg" bg={darkMode ? 'dark' : 'light'} style={{ backgroundColor: 'rgb(2, 49, 92)' }}>
      <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
          <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
          <Nav.Link as={Link} to="/payment">Plans</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav>
        <p className="registrar-se"><Link to="/registro-1">Registrar-se</Link></p>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
