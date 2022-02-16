import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import CartSummary from "./CartSummary";
export default function () {
  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Messages</Nav.Link>
            </Nav>
            <Nav>
              <CartSummary />
              <Nav.Link>
                <Button variant="primary">Sign Up</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
