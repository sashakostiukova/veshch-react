import React from 'react';
import './AboutAccessories.css';

export default function AboutAccessories() {
  return (
    <section className="about-accessories">
      <div className="about-accessories__text-wrapper">

        <p className="about-accessories__text">
          Керамические украшения “вещь” дополнят яркий наряд нежностью 
          или станут акцентом в спокойном образе
        </p>
        <p className="about-accessories__text about-accessories__text_position_right about-accessories__text-accent">
          Все украшения можно {"\n"} носить как серьги или подвески
        </p>
      </div>
    </section>
  )
}
