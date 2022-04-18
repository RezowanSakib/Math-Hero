import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Google from "../Google/Google";


  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { async } from "@firebase/util";
const Login = () => {
 
const [signInWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );
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
const resetPass=async ()=>{
  const email = emailRef.current.value;
  await sendPasswordResetEmail(email);
   toast('mailsent')
}
if (user) {
  navigate("/");
}
  return (
    <div className="container">
      <ToastContainer></ToastContainer>
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
          <p className="text-danger">
          
          {error?.message}
        </p>
        <p>Forgate password?<button className="btn-md bg-danger" onClick={resetPass}>ResetPass</button></p>
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
