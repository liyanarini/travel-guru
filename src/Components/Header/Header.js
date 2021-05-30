import React from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from '../../Image/Logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-light bg-transparent">
            <div className="container-fluid">
            <form className="d-flex">
                <img className="logo" src={logo} alt="" />
                <input className="form-control input-field" type="search" placeholder="Search your destination..." aria-label="Search" />
                <a href="#">News</a>
                <a href="#">Destination</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                <Link to="/login">
                  <button className="btn btn-warning home__btn">Login</button>            
                </Link>
                </form>
            </div>
            </nav>
        </div>
    );
};

export default Header;