import React from 'react';
import logo from '../../images/logo.svg';
import SeachIcon from '../../images/SeachIcon.png';

import './Header.css';

const Header = () => {
    return (
        <div className = "header">
            <div>
                <img 
                    className="header__logo"
                    src = {logo}
                    alt = "Timescale Logo"
                />
            </div>

            <div className="header__search">
                <img 
                    className = "search__icon"
                    src = {SeachIcon}
                    alt = "Search icon"
                />
                <input 
                    className = "search__input"
                    type="search"
                    placeholder = "Search for a movie" 
                />
            </div>
        </div>
    )
}

export default Header;
