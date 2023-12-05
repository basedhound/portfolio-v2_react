import React from 'react'
import './about.css'

const About = () => {
  return (
    <section class="about section" id="about">
      <span class="section__subtitle">Intro</span>
      <h2 class="section__title">About Me</h2>

      <div class="about__container container grid">
        <img src="assets/img/about.jpg" alt="" class="about__img" />

        <div class="about__data">
          <div class="about__info">
            <div class="about__box">
              <i class="bx bx-award about__icon"></i>
              <h3 class="about__title">Experience</h3>
              <span class="about__subtitle">8 Years Working</span>
            </div>

            <div class="about__box">
              <i class="bx bx-briefcase-alt about__icon"></i>
              <h3 class="about__title">Completed</h3>
              <span class="about__subtitle">48 + Projects</span>
            </div>

            <div class="about__box">
              <i class="bx bx-support about__icon"></i>
              <h3 class="about__title">Support</h3>
              <span class="about__subtitle">Online 24/7</span>
            </div>
          </div>

          <p class="about__description">
            Frontend developer, I create web pages with UI / UX user interface,
            I have years of experience and many clients are happy with the
            projects carried out.
          </p>

          <a href="#contact" class="button">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default About