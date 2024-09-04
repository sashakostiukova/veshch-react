import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './NavigationMenu.css';

export default function NavigationMenu({isOpen}) {

  const location = useLocation();

  // React.useEffect(() => {
  //   if (!isOpen) return;

  //   const handleOverlay = (event) => {
  //     if (event.target.classList.contains("vertical-navigation_opened")) {
  //       closeSidebar();
  //     }
  //   };

  //   const handleEscape = (e) => {
  //     if (e.key === "Escape") {
  //       closeSidebar();
  //     }
  //   };

  //   document.addEventListener("keydown", handleEscape);
  //   document.addEventListener("mousedown", handleOverlay);

  //   return () => {
  //     document.removeEventListener("keydown", handleEscape);
  //     document.removeEventListener("mousedown", handleOverlay);
  //   };
  // }, [isOpen, closeSidebar]);

  return (
    <div className={`navigation-menu ${isOpen && "navigation-menu_opened"}`}>

      <nav className="navigation-menu__links">
        <ul className="navigation-menu__links-list">
          <li className="navigation-menu__list-item">
            <NavLink 
              className={({isActive}) => `navigation-menu__link ${isActive ? "navigation-menu__link_active" : ""}`}
              to="/interior">
                интерьер
            </NavLink>
          </li>
          <li className="navigation-menu__list-item">
            <NavLink 
              className={({isActive}) => `navigation-menu__link ${isActive ? "navigation-menu__link_active" : ""}`}
              to="/accessories">
                украшения
            </NavLink>
          </li>
          <li className="navigation-menu__list-item">
            {location.pathname === "/" &&
              <HashLink 
              className="navigation-menu__link" 

              // activeStyle={{ color: 'red' }}
              // activeClassName="navigation-menu__link_active"
              smooth to="/#contacts" 
              >
                контакты
              </HashLink>
            }
            {location.pathname === "/interior" &&
              <HashLink className="navigation-menu__link" smooth to="/interior#contacts">
                контакты
              </HashLink>
            }
            {location.pathname === "/accessories" &&
              <HashLink className="navigation-menu__link" smooth to="/accessories#contacts">
                контакты
              </HashLink>
            }

          </li>

        </ul>
      </nav>

          {/* <NavHashLink
            to="/some/path#with-hash-fragment"
            activeClassName="selected"
            activeStyle={{ color: 'red' }}
            </NavHashLink> */}
    </div>

  )
}
