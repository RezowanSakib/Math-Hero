import React from 'react';
  import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const Google = () => {
    const navigate=useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        navigate("/");
      }
    return (
        <div>
            <button className='btn-secondary rounded' onClick={() => signInWithGoogle()}>Sign In</button> 
        </div>
    );
};

export default Google;
