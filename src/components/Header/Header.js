import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo.svg';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import './Header.css';

export default function Header({ isMenuOpen, toggleMenu }) {

  function onClick() {
    toggleMenu();
  }

  return (
    <>
    <header className="header">
      <Link to="/" className="header__link link-transition">
        <img className="header__logo" src={headerLogo} alt="логотип сайта"/>
      </Link>
      <button className="header__menu-button link-transition" onClick={onClick}/>
    </header>
    <NavigationMenu isOpen={isMenuOpen}/>
    </>
  )
}
