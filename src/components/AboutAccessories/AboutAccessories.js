import React from 'react';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';
import './AboutAccessories.css';

export default function AboutAccessories() {
  return (
    <section className="about-accessories" id="about-accessories">
      <div className="about-accessories__bg-container">
        <ScrollAnimation className="about-accessories__animation-container" animateIn="fadeInUp" duration={2} animateOnce={true} >
          <div className="about-accessories__text-wrapper">
            <p className="about-accessories__text">
              Керамические украшения “вещь” дополнят яркий наряд нежностью 
              или станут акцентом в спокойном образе
            </p>
            <p className="about-accessories__text about-accessories__text_position_right about-accessories__text-accent">
              Все украшения можно {"\n"} носить как серьги или подвески
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
