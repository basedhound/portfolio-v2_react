import React from "react";
import "./home.css";
import img from "../../assets/img";

const Home = () => {
  return (
    <section class="home section" id="home">
      <div class="home__container container grid">
        <div class="home__data">
          <span class="home__greeting">Hello, I'm</span>
          <h1 class="home__name">Frank Vukelić</h1>
          <h3 class="home__education">Fullstack Developer</h3>

          <div class="home__buttons">
            {/* Insert CV */}
            <a
              download=""
              href="assets/pdf/Ansel-Cv.pdf"
              class="button button--ghost">
              Download CV
            </a>
            <a href="#about" class="button">
              About me
            </a>
          </div>
        </div>

        <div class="home__handle">
          {/* Insert image, according to the example size of the portfolio */}
          <img src={img.profile} alt="" class="home__img" />
        </div>

        <div class="home__social">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            class="home__social-link">
            <i class="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://github.com/basedhound"
            target="_blank"
            class="home__social-link">
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <a href="#about" class="home__scroll">
          <i class="bx bx-mouse home__scroll-icon"></i>
          <span class="home__scroll-name">Scroll Down</span>
        </a>
      </div>
    </section>
  );
};

export default Home;
