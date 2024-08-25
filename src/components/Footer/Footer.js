import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__heding-wrapper">
        <h2 className="footer__heading">контакты</h2>
      </div>
      <nav className="footer__links">
        <ul className="footer__links-list">
          <li className="footer__list-item">
            <img src="./images/instagram-icon.svg" alt="иконка инстаграм" className="footer__social-icon" />
            <a href="#" target="_blank" rel="noopener noreferrer" className="link">veshch_shch</a>
          </li>
          <li className="footer__list-item">
            <img src="./images/telegram-icon.svg" alt="иконка телеграм" className="footer__social-icon" />
            <a href="#" target="_blank" rel="noopener noreferrer" className="link">julia_shchu</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
