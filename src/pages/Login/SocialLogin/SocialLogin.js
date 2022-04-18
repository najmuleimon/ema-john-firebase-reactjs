import React from 'react';
import './SocialLogin.css';
import google from '../../../assets/images/google.png';
import github from '../../../assets/images/github.png';
import facebook from '../../../assets/images/facebook.png';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import {useNavigate} from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, loading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, loading1, githubError] = useSignInWithGithub(auth);

    const navigate = useNavigate();

    if(googleUser || githubUser){
        navigate('/');
    }
    return (
        <div className='social-btn'>
            <button type='button' onClick={() => signInWithGoogle()}>
                <img src={google} alt="" />
                Continue with Google
            </button>
            <button type='button' onClick={() => signInWithGithub()}>
                <img src={github} alt="" />
                Continue with Github
            </button>
            <button type='button'>
                <img src={facebook} alt="" />
                Continue with Facebook
            </button>
        </div>
    );
};

export default SocialLogin;