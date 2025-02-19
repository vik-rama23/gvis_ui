import React from 'react';
import './Header.css';
import logo from '../../assest/images/gvis-logo.png';
import { Link } from 'react-router-dom';

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
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="">Academic</Link></li>
                        <li><Link to="">Facilities</Link></li>
                        <li><Link to="">Alumni</Link></li>
                        <li><Link to="">Gallery</Link></li>
                        <li><Link to="/downloads">Downloads</Link></li>
                        <li><Link to="">Admission</Link></li>
                        <li><Link to="">Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;