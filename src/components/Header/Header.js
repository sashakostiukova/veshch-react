import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo.svg';
import menuButton from '../../images/menu-button.svg';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import './Header.css';

export default function Header({ isMenuOpen, toggleMenu }) {

  function onClick() {
    toggleMenu();
  }

  return (
    <>
    <header className="header">
      <Link to="/" className="header__link">
        <img className="header__logo link-transition" src={headerLogo} alt="логотип сайта"/>
      </Link>
      <button className="header__menu-button" onClick={onClick}>
        <img className="header__button-image link-transition" src={menuButton} alt="иконка кнопки вызова меню"/>
      </button>
    </header>
    <NavigationMenu isOpen={isMenuOpen} closeMenu={toggleMenu} />
    </>
  )
}
