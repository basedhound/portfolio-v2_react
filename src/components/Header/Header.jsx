import React from "react";
import "./header.css";
import "../../styles.css";

const Header = () => {
  return (
    <header class="header" id="header">
      <nav class="nav container">
        <a href="#" class="nav__logo">
          FV
        </a>

        <div class="nav__menu">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="#home" class="nav__link active-link">
                <i class="bx bx-home-alt nav__icon"></i>
              </a>
            </li>

            <li class="nav__item">
              <a href="#about" class="nav__link">
                <i class="bx bx-user nav__icon"></i>
              </a>
            </li>

            <li class="nav__item">
              <a href="#skills" class="nav__link">
                <i class="bx bx-book nav__icon"></i>
              </a>
            </li>

            <li class="nav__item">
              <a href="#work" class="nav__link">
                <i class="bx bx-briefcase-alt-2 nav__icon"></i>
              </a>
            </li>

            <li class="nav__item">
              <a href="#contact" class="nav__link">
                <i class="bx bx-message-square-detail nav__icon"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Theme change button */}
        <i class="bx bx-moon change-theme" id="theme-button"></i>
      </nav>
    </header>
  );
};

export default Header;
