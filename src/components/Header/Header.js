import React from 'react';
import { Link } from 'react-router-dom';
import headerLogoPath from '../../images/logo.svg';
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
        <img className="header__logo" src={headerLogoPath} alt="логотип сайта"/>
      </Link>
      <button className="header__menu-button" onClick={onClick}/>
    </header>
    <NavigationMenu isOpen={isMenuOpen}/>
    </>
  )
}
