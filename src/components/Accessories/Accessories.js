import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Accessories.css';

export default function Accessories({ isNavigationMenuOpen, toggleNavigationMenu }) {
  return (
    <>
    <Header isMenuOpen={isNavigationMenuOpen} toggleMenu={toggleNavigationMenu}/>
    <div>Accessories</div>
    <Footer />
    </>
  )
}
