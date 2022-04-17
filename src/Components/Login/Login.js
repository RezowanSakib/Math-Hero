import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="container">
    
      <div className="row">
        <Form className="col-md-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <p>New to MathHero?<Link to='/register'>Register</Link></p>
        </Form>
       
        
      </div>
    </div>
  );
};

export default Login;
