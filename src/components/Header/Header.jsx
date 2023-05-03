import React from "react";
import { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="common-color py-2 mb-0 mb-lg-5">
      <Navbar open={open} expand="lg">
        <Container>
          <Link to="/" className="navbar-brand  fw-bold fs-3">
            Kitchen House
          </Link>
          <Navbar.Toggle onClick={() => setOpen(!open)} />
          <Navbar.Collapse>
            <Nav className="mx-auto fs-5  gap-4">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/recipe" className="nav-link">
                Recipe
              </Link>

              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </Nav>
            <Nav>
              <Link to="/login">
                {" "}
                <Button className="me-2 mb-3 mb-lg-0" variant="primary">
                  LogIn
                </Button>
              </Link>
            </Nav>
            <Nav>
              {" "}
              <Link to="/register">
                {" "}
                <Button variant="secondary">Register</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
