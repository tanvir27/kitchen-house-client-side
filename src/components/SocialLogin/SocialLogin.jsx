import React from 'react';
import { FaGithub, FaGoogle, FaMailBulk } from "react-icons/fa";
import { Button } from "react-bootstrap";

const SocialLogin = () => {
    return (
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
    );
};

export default SocialLogin;