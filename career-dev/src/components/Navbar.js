import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navbars() {
  return (
    <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow">
      <Container>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end w-100">
            <Nav href="/" className="active text-uppercase">
              Home
            </Nav>
            <Nav href="/menu" className=" text-uppercase">
              Menu
            </Nav>
            <Nav href="/about" className=" text-uppercase">
              About
            </Nav>
            <Nav href="/contact" className=" text-uppercase">
              Contact
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
