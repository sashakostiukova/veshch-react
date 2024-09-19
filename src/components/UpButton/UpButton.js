import React from 'react';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import arrowUp from '../../images/arrow-up-button.svg';
import './UpButton.css';

export default function UpButton() {

  const location = useLocation();

  return (
    <ScrollAnimation className="up-button__animation-container"
      animateIn="fadeIn"
      duration={2.5}
      offset={50}
    > 
      {location.pathname === "/" &&
        <HashLink className="up-button" smooth to="/#hero">
          <img className="up-button__arrow" src={arrowUp} alt="стрелка наверх" />
        </HashLink>
      }
      {location.pathname === "/interior" &&
        <HashLink className="up-button" smooth to="/interior#about-interior">
          <img className="up-button__arrow" src={arrowUp} alt="стрелка наверх" />
        </HashLink>
      }
      {location.pathname === "/accessories" &&
        <HashLink className="up-button" smooth to="/accessories#about-accessories">
          <img className="up-button__arrow" src={arrowUp} alt="стрелка наверх" />
        </HashLink>
      }
    </ScrollAnimation>
  )
}
