import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import { toast } from "react-hot-toast";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = (event) => {
    event.preventDefault();
    logOut()
      .then(() => {
        toast.success('Log Out Successfully !')
        navigate("/login");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const buttonRef = useRef(null);

  useEffect(() => {
    if (user) {
      tippy(buttonRef.current, {
        content: user.displayName,
      });
    }
  }, [user]);

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
                to="/"
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

              {user ? (
                <div>
                  <NavLink
                    onClick={handleLogOut}
                    className={({ isActive }) =>
                      isActive
                        ? "active-link text-decoration-none"
                        : "link text-decoration-none text-white"
                    }
                    to="/login"
                  >
                    LogOut
                  </NavLink>
                  <img
                    className="img-fluid rounded-circle ms-3"
                    src={user.photoURL}
                    alt=""
                    ref={buttonRef}
                    style={{ height: "40px", width: "40px" }}
                  />
                </div>
              ) : (
                <div className="">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "active-link text-decoration-none me-3"
                        : "link text-decoration-none text-white me-3"
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
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
