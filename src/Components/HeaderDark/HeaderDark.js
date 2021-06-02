import React from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from '../../Image/Logo.png'
import './HeaderDark.css'

const HeaderDark = () => {
    return (
        <div className="header-area" >
            <nav className="navbar navbar-light bg-transparent">
            <div className="container-fluid">
            <img className="logo" src={logo} alt="" />
                <div className="nav-links col">
                    <a href="#">News</a>
                    <a href="#">Destination</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                    <Link to="/login">
                    <button className="btn btn-warning home-btn">Login</button>            
                    </Link>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default HeaderDark;