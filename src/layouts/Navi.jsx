import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

export default function () {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleSignOut() {
    setIsAuthenticated(false);    
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }

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
              {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
