import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Google = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
  

  if (user) {
    navigate("/");
  }
  if (error) {
    return (
      <div>
        <p className="text-danger">
          {error?.message}
         
        </p>
        <button
          className="btn-secondary rounded"
          onClick={() => signInWithGoogle()}
        >
          Sign In
        </button>
      </div>
    );
  } else{
  return (
    <div>
      <button
        className="btn-secondary rounded"
        onClick={() => signInWithGoogle()}
      >
        Sign In
      </button>
    </div>
  );}
};

export default Google;
