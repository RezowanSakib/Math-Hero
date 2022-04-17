import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Google from "../Google/Google";
const Login = () => {
 
const [signInWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth);
const emailRef = useRef("");
const passRef = useRef("");
const navigate = useNavigate();
const handleLogin = (event) => {
  event.preventDefault();
  const email = emailRef.current.value;
  const password = passRef.current.value;
  signInWithEmailAndPassword(email, password);
};
const navigateRegister = (event) => {
  navigate("/register");
};
if (user) {
  navigate("/");
}
  return (
    <div className="container">
      <div className="row">
        <Form className="col-md-4  mx-auto " onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              ref={emailRef}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
             ref={passRef}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
          <p>
            New to MathHero?
            <Link to="/register" onClick={navigateRegister}>
              Register
            </Link>
          </p>
        </Form>
      </div>
      <Google></Google>
    </div>
  );
};

export default Login;
