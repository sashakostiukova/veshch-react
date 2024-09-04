import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Interior.css';

export default function Interior({ isNavigationMenuOpen, toggleNavigationMenu }) {
  return (
    <>
    <Header isMenuOpen={isNavigationMenuOpen} toggleMenu={toggleNavigationMenu}/>
    <div>Interior</div>
    <Footer />
    </>
  )
}
