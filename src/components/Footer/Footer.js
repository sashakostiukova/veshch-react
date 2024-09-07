import React from 'react';
import { useLocation } from 'react-router';
import './Footer.css';
import instagramIcon from '../../images/instagram-icon.svg';
import telegramIcon from '../../images/telegram-icon.svg';

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
        <ul id="contacts" className="footer__links-list">
          <li className="footer__list-item">
            <img src={instagramIcon} alt="иконка инстаграм" className="footer__social-icon" />
            <a href="https://www.instagram.com/veshch_shch" target="_blank" rel="noopener noreferrer" className="link">veshch_shch</a>
          </li>
          <li className="footer__list-item">
            <img src={telegramIcon} alt="иконка телеграм" className="footer__social-icon" />
            <a href="https://t.me/julia_shchu" target="_blank" rel="noopener noreferrer" className="link">julia_shchu</a>
          </li>
        </ul>
      </nav>

      {/* <div style={{ marginTop: '1000px' }}></div> */}
    </footer>
  )
}
