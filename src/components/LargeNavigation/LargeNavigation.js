import React from 'react';
import './LargeNavigation.css'

export default function LargeNavigation() {
  return (
    <section className="large-navigation">
      <nav className="large-navigation__links">
        <ul className="large-navigation__links-list">
          <li className="large-navigation__list-item">
            <img src="./images/interior-icon.svg" alt="иконка инстаграм" className="large-navigation__icon" />
            <a href="#" target="_blank" rel="noopener noreferrer" className="link">интерьер</a>
          </li>
          <li className="large-navigation__list-item">
            <img src="./images/accessories-icon.svg" alt="иконка телеграм" className="large-navigation__icon" />
            <a href="#" target="_blank" rel="noopener noreferrer" className="link">украшения</a>
          </li>
        </ul>
      </nav>
    </section>
  )
}
