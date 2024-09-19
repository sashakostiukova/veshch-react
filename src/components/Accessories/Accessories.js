import React from 'react';
import Header from '../Header/Header';
import AboutAccessories from '../AboutAccessories/AboutAccessories';
import AccessoriesPhotogallery from '../AccessoriesPhotogallery/AccessoriesPhotogallery';
import Footer from '../Footer/Footer';
import './Accessories.css';

export default function Accessories({ isNavigationMenuOpen, toggleNavigationMenu }) {
  return (
    <>

    <Header isMenuOpen={isNavigationMenuOpen} toggleMenu={toggleNavigationMenu}/>

    <div className="accessories">
      <AboutAccessories />
      <AccessoriesPhotogallery />
    </div>

    <Footer />

    </>
  )
}
