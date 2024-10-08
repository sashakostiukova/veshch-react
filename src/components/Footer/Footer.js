import React from 'react';
import { useLocation } from 'react-router';
import instagramIcon from '../../images/instagram-icon.svg';
import telegramIcon from '../../images/telegram-icon.svg';
import './Footer.css';

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

    </footer>
  )
}
