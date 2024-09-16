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
              <span className="link-transition">
                интерьер
              </span>
            </Link>
          </li>

          <li className="large-navigation__list-item">
            <Link className="large-navigation__link" to="/accessories">
              <img src={accessoriesIconPath} alt="иконка телеграм" className="large-navigation__icon" />
              <span className="link-transition">
                украшения
              </span>
            </Link>
          </li>

        </ul>
      </nav>
    </section>
  )
}
