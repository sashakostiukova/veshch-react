import React from 'react';
import aromaLampPath from '../../images/aroma-lamp.png';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <figure className="hero__figure">
        <img src={aromaLampPath} alt="" className="hero__image" />
      </figure>
    </section>
  )
}
