import React from "react";
import { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

    

  return (
    <div className="common-color bg-dark  py-2 mb-0 mb-lg-5">
      <Navbar open={open} expand="lg">
        <Container>
          <Link to="/" className="navbar-brand text-white fw-bold fs-3">
            <i> Kitchen House</i>
          </Link>
          <Navbar.Toggle onClick={() => setOpen(!open)} />
          <Navbar.Collapse>
            <Nav className="ms-auto  text-white fs-5 fw-bold gap-4">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "active-link text-decoration-none"
                    : "link text-decoration-none text-white"
                }
                to="/home"
              >
                Home
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "active-link text-decoration-none"
                    : "link text-decoration-none text-white"
                }
                to="/blog"
              >
                Blog
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "active-link text-decoration-none"
                    : "link text-decoration-none text-white"
                }
                to="/login"
              >
                LogIn
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "active-link text-decoration-none"
                    : "link text-decoration-none text-white"
                }
                to="/register"
              >
                Register
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
