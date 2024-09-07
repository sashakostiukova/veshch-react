import React from 'react';
// import aromaLamp from '../../images/aroma-lamp.png';
// import banner from '../../images/banner.png'; full image
// import aromaWithSwirlBanner from '../../images/banner-aroma-with-swirl.png';
import bannerAromaWithSwirlAndEllipses from '../../images/banner-aroma-with-swirl-and-ellipses.png';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <figure className="hero__figure">
        <img src={bannerAromaWithSwirlAndEllipses} alt="" className="hero__image" />
      </figure>
    </section>
  )
}
