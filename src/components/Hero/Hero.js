import React from 'react';
import aromaLamp from '../../images/aroma-lamp-banner.png';
import aromaLampMobile from '../../images/aroma-lamp-banner-mobile.png'
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
        <picture className="hero__picture">
          <source srcset={aromaLampMobile} media="(max-width: 509px)" />
          <img className="hero__image" src={aromaLamp} alt="" />
        </picture>
    </section>
  )
}
