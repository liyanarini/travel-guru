import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { UserContext } from '../../App';
import logo from '../../Image/Logo.png'
import './Header.css'

const Header = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <nav className="navbar navbar-light bg-transparent">
            <div className="container-fluid">
            <form className="d-flex">
                <img className="web-logo" src={logo} alt="" />
                <input className="form-control input-field" type="search" placeholder="Search your destination..." aria-label="Search" />
                <a href="#">News</a>
                <a href="#">Destination</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>

                {
                    loggedInUser.email? <button className="btn btn-warning login-btn">Log Out</button> :
                    <Link to="/login">
                    <button className="btn btn-warning login-btn">Login</button>            
                    </Link>
                }
                   {/* <Link to="/login">
                    <button className="btn btn-warning login-btn">Login</button>            
                    </Link> */}
                </form>
            </div>
            </nav>
        </div>
    );
};

export default Header;