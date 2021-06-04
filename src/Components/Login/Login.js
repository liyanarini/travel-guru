import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import HeaderDark from '../HeaderDark/HeaderDark';
import FbLogo from '../../Image/Icon/fb.png'
import GoogleLogo from '../../Image/Icon/google.png'
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    var [user, setUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

     
    const googleSignIn = () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {
                const {displayName , email} = result.user;
                const googleNewUser = {name : displayName ,  email:email}
                setLoggedInUser(googleNewUser);
                history.replace(from);
                })
                .catch(function(error) {
                const newUserInfo = { ...loggedInUser };
                    newUserInfo.message = error.message;
                    setLoggedInUser(newUserInfo);
                });
    }

    const fbLogIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider)
        .then(function(result) {
            const {displayName , email} = result.user;
            const fbNewUser = {name : displayName ,  email:email}
            setLoggedInUser(fbNewUser);
            history.replace(from);
        })
        .catch(function(error) {
            const newUserInfo = { ...loggedInUser };
                    newUserInfo.message = error.message;
                    setLoggedInUser(newUserInfo);
          });
    }

    const handleChange = (e) => {
        let isFormValid = true;

        if (e.target.name === "email"){
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            console.log(isEmailValid);
        }
        if (e.target.name === "password"){
            const inPassValid = e.target.value.length >= 6;
            console.log(inPassValid);
        }
        if (isFormValid){
            const newUserInfo = {...loggedInUser};
            newUserInfo[e.target.name] = e.target.value;
            setLoggedInUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if (user && loggedInUser.email && loggedInUser.password) {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then(res => {
                    history.replace(from);
                    user.updateProfile({
                    displayName:loggedInUser.name ,
                    email: loggedInUser.email
                })
            })
            .catch(function(error) {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.message = error.message;
                    newUserInfo.success = false;
                    setLoggedInUser(newUserInfo);
            });
         }
         if(!user && loggedInUser.email && loggedInUser.password){
             firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then(res => {
                    const {displayName , email} = res.user;
                    const googleNewUser = {name:displayName , email:email}
                    setLoggedInUser(googleNewUser);
                    history.replace(from);
            })
            .catch(error => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.message = error.message;
                    newUserInfo.success = false;
                    setLoggedInUser(newUserInfo);
            });
         } 
         e.preventDefault();
    }

    return (
        <div>
            <div className="header-area">
                <HeaderDark/>
            </div>
            <div>
                <div className="container">
                    <div className="d-flex align-items-center">
                      <div className="col-md-6 offset-3">
                        <div className=" login-form">
                            {
                                user? <h4> Create an account </h4> : <h4> Login </h4>
                            }
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    {
                                        user && <Form.Group >
                                        <Form.Control onBlur={handleChange} name="firstName" required className="input" type="text" placeholder="First Name" />
                                        <Form.Control onBlur={handleChange} name="lastName" required className="input" type="text" placeholder="Last Name" />
                                        </Form.Group>
                                    }

                                    <Form.Control onBlur={handleChange} name="email" required className="input" type="email" placeholder="Username or Email" />

                                    <Form.Control onBlur={handleChange} name="password" required className="input" type="password" placeholder="Password" />

                                    {
                                            user &&
                                            <Form.Control onBlur={handleChange} name="confirmPassword" className="input" required type="password" placeholder="Confirm Password" />
                                    }

                                    {
                                            user? <input className="submit-btn" variant="warning" type="submit" value='Create an account' /> : <input className="submit-btn" variant="warning" type="submit" value='Log In' />
                                    }

                                    <div className='text-center text-light footer-text '>
                                    {
                                            user ? 
                                            <span>You alrady have an account? 
                                                <Link className="toggle" onClick={() =>setUser(!user)}> Log in </Link> 
                                            </span> 
                                                : <span>Don’t have an account? <Link className="toggle" onClick={() => setUser(!user)}> Create an account</Link> </span>
                                    }
                                </div>
                            </Form.Group>
                        </Form> 
                        </div>
                             <div className="footer">
                                <h6>-------------------- or ------------------</h6>
                                <button onClick={fbLogIn} className="fb-google-btn">
                                    <img className="logo" src={FbLogo} alt="" /> Continue with Facebook
                                </button>
                                <button onClick={googleSignIn} className="fb-google-btn">
                                    <img className="logo" src={GoogleLogo} alt="" /> Continue with Google
                                </button>
                             </div>
                             <h4>{loggedInUser.message}</h4>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;