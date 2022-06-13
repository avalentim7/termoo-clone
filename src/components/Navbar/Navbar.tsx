import React from 'react';
import './Navbar.scss';

import words from '../../words.json';

import ProfilePicture from '../../assets/profile-picture.jpeg';

function Navbar() {
    console.log(words);
    return (
        <div className="navbar-container">
            <div className="navbar-logo">TERMO</div>
            <img src={ProfilePicture} alt="ProfilePicture" />
        </div>
    )
}

export default Navbar;