import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Description from '../Description/Description';
import LargeNavigation from '../LargeNavigation/LargeNavigation';
import Footer from '../Footer/Footer';
import './Main.css';

export default function Main({ isNavigationMenuOpen, toggleNavigationMenu }) {
  return (
    <>
    <Header isMenuOpen={isNavigationMenuOpen} toggleMenu={toggleNavigationMenu}/>

    <div className="main-bg-wrapper">
      <main className="main-content">
        <Hero />
        <Description />
        <LargeNavigation />
      </main>

      <Footer />
    </div>
    </>
  )
}
