import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import Google from "../Google/Google";
import { useSendEmailVerification } from "react-firebase-hooks/auth";

const Register = () => {
  const navigate = useNavigate();
  const navigateLogin = (event) => {
    navigate("/register");
  };
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);

  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleRegister = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    if (agree) {
      createUserWithEmailAndPassword(email, password);
    }
  };

  if (user) {
    navigate("/");
  }
  return (
    <div className="register-form">
      <h2 style={{ textAlign: "center" }}>Please Register</h2>
      <div className="row">
        <form onSubmit={handleRegister} className="col-md-6 mx-auto">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            id="emailId"
            placeholder="Email Address"
            required
            onBlur={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            name="password"
            id="passId"
            placeholder="Password"
            required
            onBlur={(e) => setPassword(e.target.value)}
          />
          <input
            disabled={!agree}
            type="submit"
            className="rounded bg-primary text-white"
            value="Register"
          />
          <button
           
          >
            Verify email
          </button>
        </form>
      </div>

      <p>
        Already have an account?
        <Link
          to="/login"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>

      <input
        onClick={() => setAgree(!agree)}
        type="checkbox"
        name="terms"
        id="terms"
      />
      <label
        htmlFor="terms"
        className={agree ? `ps-2 text-primary` : "text-danger ps-2"}
      >
        Accept all Term and Conditions
      </label>
      <p className="text-danger">
        {error?.message}
        {error?.message}
      </p>

      <Google></Google>
    </div>
  );
};

export default Register;
