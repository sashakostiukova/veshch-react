import React from 'react';
import { useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import './NavigationMenu.css';

export default function NavigationMenu({ isOpen, closeMenu }) {

  const location = useLocation();

  React.useEffect(() => {
    if (!isOpen) return;

    const handleClickOutsideMenu = (event) => {
      if (!event.target.closest(".navigation-menu_opened") && !event.target.closest(".header__menu-button")) {
        closeMenu();
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutsideMenu);
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [isOpen, closeMenu]);
  
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className={`navigation-menu ${isOpen && "navigation-menu_opened"}`}>

      <nav className="navigation-menu__links">
        <ul className="navigation-menu__links-list">

          <li className="navigation-menu__list-item">
            <NavLink
              className={({isActive}) => `navigation-menu__link ${isActive ? "navigation-menu__link_active" : ""}`}
              to="/interior#about-interior"
              onClick={scrollToTop}
            >
                интерьер
            </NavLink>
          </li>

          <li className="navigation-menu__list-item">
            <NavLink 
              className={({isActive}) => `navigation-menu__link ${isActive ? "navigation-menu__link_active" : ""}`}
              to="/accessories#about-accessories"
              onClick={scrollToTop}
            >
                украшения
            </NavLink>
          </li>

          <li className="navigation-menu__list-item">
            {location.pathname === "/" &&
              <HashLink className="navigation-menu__link" smooth to="/#contacts" onClick={closeMenu}>
                контакты
              </HashLink>
            }
            {location.pathname === "/interior" &&
              <HashLink className="navigation-menu__link" smooth to="/interior#contacts" onClick={closeMenu}>
                контакты
              </HashLink>
            }
            {location.pathname === "/accessories" &&
              <HashLink className="navigation-menu__link" smooth to="/accessories#contacts" onClick={closeMenu}>
                контакты
              </HashLink>
            }
          </li>

        </ul>
      </nav>

    </div>

  )
}
