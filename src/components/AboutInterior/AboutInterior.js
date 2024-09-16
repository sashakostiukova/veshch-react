import React from 'react';
import './AboutInterior.css';

export default function AboutInterior() {
  return (
    <section className="about-interior"  id="about-interior">
      <div className="about-interior__text-wrapper">
        <p className="about-interior__text">
          Интерьерная керамика “вещь” - это {"\n"}
          арт-объекты, сочетающие в себе эстетику {"\n"}
          и многофункциональность . Каждая вещь выполнена вручную {"\n"}
          из высокотемпературной глины песочного цвета и имеет шероховатую поверхность.
        </p>
        <p className="about-interior__text">
          Выберите вещь, которая поможет создать атмосферу для повседневных рутин {"\n"}
          или особого случая.
        </p>
      </div>
    </section>
  )
}
