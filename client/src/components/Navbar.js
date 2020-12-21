import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Weather</Nav.Link>
            <span style={{paddingLeft:25}}></span>
            <Nav.Link href="/mars">Mars</Nav.Link>
            <span style={{paddingLeft:25}}></span>
            <Nav.Link href="/about">About</Nav.Link>
            <span style={{paddingLeft:25}}></span>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
