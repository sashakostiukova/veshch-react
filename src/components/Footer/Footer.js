import React from 'react';
import { useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll';
import './Footer.css';
import instagramIcon from '../../images/instagram-icon.svg';
import telegramIcon from '../../images/telegram-icon.svg';
import arrowUp from '../../images/arrow-up-button.svg';

export default function Footer() {

  const location = useLocation();

  return (
    <footer className="footer">
      {location.pathname === "/" &&
        <div className="footer__heding-wrapper">
          <h2 className="footer__heading">контакты</h2>
        </div>
      }
      <nav className="footer__links">
        <ul className="footer__links-list" id="contacts">
          <li className="footer__list-item">
            <a href="https://www.instagram.com/veshch_shch" target="_blank" rel="noopener noreferrer" className="footer__link link-transition">
              <img src={instagramIcon} alt="иконка инстаграм" className="footer__social-icon" />
              veshch_shch
            </a>
          </li>
          <li className="footer__list-item">
            <a href="https://t.me/julia_shchu" target="_blank" rel="noopener noreferrer" className="footer__link link-transition">
              <img src={telegramIcon} alt="иконка телеграм" className="footer__social-icon" />
              julia_shchu
            </a>
          </li>
        </ul>
      </nav>

      {location.pathname === "/" &&
        <HashLink className="up-button" smooth to="/#hero">
          <img className="up-button__arrow" src={arrowUp} alt="" />
        </HashLink>
      }
      {location.pathname === "/interior" &&
        <HashLink className="up-button" smooth to="/interior#about-interior">
          <img className="up-button__arrow" src={arrowUp} alt="" />
        </HashLink>
      }
      {location.pathname === "/accessories" &&
        <HashLink className="up-button" smooth to="/accessories#about-accessories">
          <img className="up-button__arrow" src={arrowUp} alt="" />
        </HashLink>
      }
    </footer>
  )
}
