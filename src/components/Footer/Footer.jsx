import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark pt-5">
      <Container>
        <Row>
          <Col lg={6} md={6} className="mb-4 mb-lg-0 text-white">
            <h5 className="text-uppercase mb-4">About Us</h5>
            <p className=" mb-5">
              Welcome to our Kitchen House website, where you can find a wide
              range of delicious and healthy recipes for any occasion. Our
              mission is to inspire people to cook and enjoy homemade meals,
              whether you're a beginner or an experienced cook.
            </p>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-lg-0 text-white">
            <h5 className="text-uppercase text-center mb-4">Quick Links</h5>
            <ul className="list-unstyled text-center">
              <li className="">
                <Link className="text-decoration-none" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/login">
                  LogIn
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-lg-0 text-white">
            <h5 className="text-uppercase text-center mb-4">Connect With Us</h5>
            <ul className="list-unstyled text-center">
              <li>
                <a href="#" className="">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#" className=" ">
                  <FaPinterest />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="pb-2">
          <Col md={12}>
            <p className="text-center text-white">
              &copy; 2023 Kitchen House Website. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
