import React from 'react';
import logo from '../assets/images/grapheme-logo.svg'

const Header = () => {
    return (
        <header className="header">
            <p className="header__title">Тестовое задание</p>
            <a href="#" className="header__logo"><img src={logo} alt=""/></a>
        </header>
    );
};

export default Header;