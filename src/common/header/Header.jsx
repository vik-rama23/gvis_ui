import React from 'react';
import './Header.css';
import logo from '../../assest/images/gvis-logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt='Logo' className="logo" />
            <div>
                <div className='contact-info'>
                    <span className='contact-info-item'>
                        Affiliation number: 330400
                    </span>
                    <span className='contact-info-item'>
                        School Code: 65376
                    </span>
                    <span className='contact-info-item'>
                        Call us: +91-9931877440
                    </span>
                    <span className='contact-info-item'>
                        <a href="mailto:help.gvischool@gmail.com">Email us: help.gvischool@gmail.com</a>
                    </span>
                </div>
                <nav>
                    <ul>
                    <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/academic" activeClassName="active">Academic</NavLink></li>
                        <li><NavLink to="/facilities" activeClassName="active">Facilities</NavLink></li>
                        <li><NavLink to="/alumni" activeClassName="active">Alumni</NavLink></li>
                        <li><NavLink to="/gallery" activeClassName="active">Gallery</NavLink></li>
                        <li><NavLink to="/downloads" activeClassName="active">Downloads</NavLink></li>
                        <li><NavLink to="/admission" activeClassName="active">Admission</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;