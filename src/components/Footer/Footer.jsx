import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <Container className=" text-white text-center pt-4 pb-3">
        <Row>
          <Col xs={12} md={4}>
            <h4>Customer Service</h4>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>Returns</li>

              <li>FAQs</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h4>About Us</h4>
            <ul className="list-unstyled">
              <li>Our Story</li>
              <li>Blog</li>
              <li>Reviews</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h4>Connect with Us</h4>
            <ul className="list-unstyled">
              <li>
                <FaFacebook /> Facebook
              </li>
              <li>
                <FaTwitter /> Twitter
              </li>
              <li>
                <FaInstagram /> Instagram
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12} className="text-center">
            <p className="">
              <i>&copy; 2023 The Kitchen House All Rights Reserved.</i>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
