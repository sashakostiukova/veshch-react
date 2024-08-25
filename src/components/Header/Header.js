import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__topbar">
        <div className="header__logo" />
        <button className="header__menu-button" />
      </div>
      <figure className="header__figure">
        <img src="./images/aroma-lamp.png" alt="" className="header__image" />
      </figure>
    </header>
  )
}
