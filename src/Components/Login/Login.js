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
                const googleNewUser = {name : displayName ,  emails:email}
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
            const googleNewUser = {name : displayName ,  emails:email}
            setLoggedInUser(googleNewUser);
            history.replace(from);
        })
        .catch(function(error) {
            const newUserInfo = { ...loggedInUser };
                    newUserInfo.message = error.message;
                    setLoggedInUser(newUserInfo);
          });
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
                            <div className="login-form" action="">
                                {
                                    user? <h4> Create an account </h4> : <h4> Login </h4>
                                }
                                  <Form>
                                    <Form.Group >
                                    {
                                    user && <Form.Group >
                                    <Form.Control className="input" type="text" placeholder="First Name" />
                                    <Form.Control className="input" type="text" placeholder="Last Name" />
                                    </Form.Group>
                                    }
                                      <Form.Control className="input" type="email" placeholder="Username or Email" />
                                      
                                      <Form.Group>
                                        <Form.Control className="input" type="password" placeholder="Password" />
                                      </Form.Group>
                                    

                                    {
                                        user &&  <Form.Group>
                                        <Form.Control className="input" type="password" placeholder="Confirm Password" />
                                      </Form.Group>
                                    }
                                
                                    <Form.Group className="forgot d-flex justify-content-between">
                                        <Form.Check className="checkbox " type="checkbox" label="Remember me"/>
                                        <Link className="password">Forgot Password?</Link>
                                   </Form.Group>
                                        <div className='d-flex justify-content-center login-btn'>
                                        {
                                            user? <input className="submit-btn" variant="warning" type="submit" value='Create an account' /> : <input className="submit-btn" variant="warning" type="submit" value='Log In' />
                                        }
                                        </div>
                                    
                                        <div className='text-center text-light footer-text '>
                                    {user ? 
                                        <span>You alrady have an account? <Link className="toggle" onClick={() =>setUser(!user)}> Log in </Link> </span> 
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;