import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import {auth, provider} from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer";

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        // sign in stuff
        auth.signInWithPopup(provider)
        .then(result =>{
            console.log(result)

            dispatch({
                type: actionTypes.SET_USER,
                user:result.user,
            });
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Facebook_f_Logo_%28with_gradient%29.svg/120px-Facebook_f_Logo_%28with_gradient%29.svg.png" alt="facebook logo" />
            <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="Facebook text"/>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login;
