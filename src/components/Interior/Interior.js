import React from 'react';
import Header from '../Header/Header';
import AboutInterior from '../AboutInterior/AboutInterior';
import InteriorPhotogallery from '../InteriorPhotogallery/InteriorPhotogallery';
import Footer from '../Footer/Footer';
import './Interior.css';

export default function Interior({ isNavigationMenuOpen, toggleNavigationMenu }) {
  return (
    <>
    <Header isMenuOpen={isNavigationMenuOpen} toggleMenu={toggleNavigationMenu}/>
    <div className="interior">
      <AboutInterior />
      <InteriorPhotogallery />
    </div>
    <Footer />
    </>
  )
}
