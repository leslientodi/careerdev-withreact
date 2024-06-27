import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navbars() {
  return (
    <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow">
      <Container>
        <Navbar.Brand>Career Geeks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end w-100">
            <a href="/" className="nav-link active text-uppercase">
              Home
            </a>
            <a href="/menu" className="nav-link text-uppercase">
              Menu
            </a>
            <a href="/about" className="nav-link text-uppercase">
              About
            </a>
            <a href="/contact" className="nav-link text-uppercase">
              Contact
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
