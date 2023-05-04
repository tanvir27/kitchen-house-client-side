import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FaGithub, FaGoogle, FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <section className="py-5">
        <Container>
          <div className="d-flex justify-content-center">
            <div className="col-md-6">
              <h2 className="text-center mb-4">Login to Your Account</h2>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div className="text-center">
                  <Button className="w-25 mt-2" variant="primary" type="submit">
                    Login
                  </Button>
                </div>
                <div className="text-center mt-2 text-primary">
                  <p>
                    Don't have any account? Click here to{" "}
                    <Link to="/register">Register</Link>{" "}
                  </p>
                </div>
              </Form>
            </div>
          </div>
          <div className="container">
            <div className="text-center mb-2">
              <Button variant="secondary">
                <FaMailBulk className="me-2" />
                Sign in with Email
              </Button>
            </div>
            <div className="text-center mb-2">
              <Button variant="primary">
                <FaGoogle className="me-2" />
                Sign in with Google
              </Button>
            </div>
            <div className="text-center">
              <Button variant="dark">
                <FaGithub className="me-2" />
                Sign in with GitHub
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Login;
