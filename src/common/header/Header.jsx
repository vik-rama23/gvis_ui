import React from 'react';
import './Header.css';
import logo from '../../assest/images/gvis-logo.png';

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
                        <li><a href="#home">Home</a></li>
                        <li><a href="#academic">Academic</a></li>
                        <li><a href="#objective">Objective</a></li>
                        <li><a href="#facilities">Facilities</a></li>
                        <li><a href="#alumni">Alumni</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#downloads">Downloads</a></li>
                        <li><a href="#admission">Admission</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;