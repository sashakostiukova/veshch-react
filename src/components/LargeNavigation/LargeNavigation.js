import React from 'react';
import './LargeNavigation.css';
import interiorIconPath from '../../images/interior-icon.svg';
import accessoriesIconPath from '../../images/accessories-icon.svg';

export default function LargeNavigation() {
  return (
    <section className="large-navigation">
      <nav className="large-navigation__links">
        <ul className="large-navigation__links-list">
          <li className="large-navigation__list-item">
            <img src={interiorIconPath} alt="иконка инстаграм" className="large-navigation__icon" />
            <a href="#" className="link">интерьер</a>
          </li>
          <li className="large-navigation__list-item">
            <img src={accessoriesIconPath} alt="иконка телеграм" className="large-navigation__icon" />
            <a href="#" className="link">украшения</a>
          </li>
        </ul>
      </nav>
    </section>
  )
}
