import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { UserContext } from '../../App';
import logo from '../../Image/Logo.png'
import './HeaderDark.css'

const HeaderDark = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header-area" >
            <nav className="navbar navbar-light bg-transparent">
            <div className="container-fluid">
            <img className="dark-logo" src={logo} alt="" />
                <div className="navLinks nav-links col d-flex">
                    <a href="#">News</a>
                    <a href="#">Destination</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>

                    {
                        loggedInUser.name? <h6 className="userName">{loggedInUser.name}</h6> : <Link to="/login">
                        <button className="btn btn-warning home-btn">Login</button>            
                        </Link>
                    }
                    
                    
                </div>
            </div>
            </nav>
        </div>
    );
};

export default HeaderDark;