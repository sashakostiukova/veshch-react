import React from 'react';
import Header from '../Header/Header';
import Description from '../Description/Description';
import LargeNavigation from '../LargeNavigation/LargeNavigation';
import Footer from '../Footer/Footer';

export default function Main() {
  return (
    <>
    <Header />

    <main className="content">
      <Description />
      <LargeNavigation />
    </main>

    <Footer />
    
    </>
  )
}
