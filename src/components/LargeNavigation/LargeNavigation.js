import React from 'react';
import { Link } from 'react-router-dom';
import interiorIconPath from '../../images/interior-icon.svg';
import accessoriesIconPath from '../../images/accessories-icon.svg';
import './LargeNavigation.css';

export default function LargeNavigation() {
  return (
    <section className="large-navigation">
      <nav className="large-navigation__links">
        <ul className="large-navigation__links-list">
          <li className="large-navigation__list-item">
          <Link className="large-navigation__link" to="/interior">
            <img src={interiorIconPath} alt="иконка инстаграм" className="large-navigation__icon" />
            интерьер
          </Link>
            {/* <img src={interiorIconPath} alt="иконка инстаграм" className="large-navigation__icon" />
            <a href="#" className="link">интерьер</a> */}
          </li>

          <li className="large-navigation__list-item">
            <Link className="large-navigation__link" to="/accessories">
              <img src={accessoriesIconPath} alt="иконка телеграм" className="large-navigation__icon" />
              украшения
            </Link>
            {/* <img src={accessoriesIconPath} alt="иконка телеграм" className="large-navigation__icon" />
            <a href="#" className="link">украшения</a> */}
          </li>

        </ul>
      </nav>
    </section>
  )
}
