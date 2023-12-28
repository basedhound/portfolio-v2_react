import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../App";
import "./header.css";
import "../../styles.css";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // Navbar current location
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    const scrollActive = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");

        if (
          window.scrollY > sectionTop &&
          window.scrollY <= sectionTop + sectionHeight
        ) {
          setActiveLink(sectionId);
        }
      });
    };
    window.addEventListener("scroll", scrollActive);
    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);

  // Change header background when scrolling
  function scrollHeader() {
    const header = document.getElementById("header");
    // if scroll is greater than 50 viewport height, add scroll-header class
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  }
  window.addEventListener("scroll", scrollHeader);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <ul className="nav__social-list">
          <li>
            <a
              href="https://www.github.com/basedhound"
              target="_blank"
              title="GitHub"
              className="nav__social-link">
              <i className="bx bxl-github"></i>
            </a>
          </li>
          <li>
            <a href="#contact" title="Contact" className="nav__social-link">
              <i className="bx bx-mail-send"></i>
            </a>
          </li>
        </ul>
        <div className="nav__menu">
          <ul className="nav__list">
            <li>
              <a
                href="#home"
                title="Accueil"
                className={`nav__link ${
                  activeLink === "home" ? "active-link" : ""
                }`}>
                <i className="bx bx-home-alt nav__icon"></i>
              </a>
            </li>
            <li>
              <a
                href="#about"
                title="Intro"
                className={`nav__link ${
                  activeLink === "about" ? "active-link" : ""
                }`}>
                <i className="bx bx-user nav__icon"></i>
              </a>
            </li>
            <li>
              <a
                href="#skills"
                title="Skills"
                className={`nav__link ${
                  activeLink === "skills" ? "active-link" : ""
                }`}>
                <i className="bx bx-book nav__icon"></i>
              </a>
            </li>
            <li>
              <a
                href="#work"
                title="Projets"
                className={`nav__link ${
                  activeLink === "work" ? "active-link" : ""
                }`}>
                <i className="bx bx-briefcase-alt-2 nav__icon"></i>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                title="Contact"
                className={`nav__link ${
                  activeLink === "contact" ? "active-link" : ""
                }`}>
                <i className="bx bx-message-square-detail nav__icon"></i>
              </a>
            </li>
          </ul>
        </div>
        {/* Theme change button */}
        <i
          onClick={toggleTheme}
          className={`bx ${
            theme === "dark" ? "bx-sun" : "bx-moon"
          } change-theme`}></i>
      </nav>
    </header>
  );
};

export default Header;
