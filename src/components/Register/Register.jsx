import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="d-flex justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mb-4">Register for an Account</h2>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formBasicPhoto">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" placeholder="Enter your photo URL" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <div className="text-center ">
                <Button className="mt-2 w-25" variant="primary" type="submit">
                  Register
                </Button>
              </div>
              <div className="text-center mt-2 text-primary">
                <p>
                  Already have an Account? Click here to{" "}
                  <Link to="/login">Login</Link>{" "}
                </p>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Register;
