import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section class="skills section" id="skills">
      <span class="section__subtitle">My abilities</span>
      <h2 class="section__title">My Experience</h2>

      {/* CONTAINER */}
      <div class="skills__container container grid">
        
        {/* FRONTEND */}
        <div class="skills__content">
          <h3 class="skills__title">Frontend</h3>

          <div class="skills__box">
            {/* 1st column */}
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>
                <div>
                  <h3 class="skills__name">HTML</h3>
                  <span class="skills__level">Basic</span>
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>
                <div>
                  <h3 class="skills__name">JavaScript</h3>
                  <span class="skills__level">Advanced</span>
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>
                <div>
                  <h3 class="skills__name">Bootstrap</h3>
                  <span class="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
            {/* close 1st column */}

            {/* 2nd column */}
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>
                <div>
                  <h3 class="skills__name">CSS</h3>
                  <span class="skills__level">Intermediate</span>
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>
                <div>
                  <h3 class="skills__name">React</h3>
                  <span class="skills__level">Intermediate</span>
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>
                <div>
                  <h3 class="skills__name">Tailwind</h3>
                  <span class="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
            {/* close 2nd column */}
          </div>
        </div>
        {/* close FRONTEND */}

        {/* BACKEND */}
        <div class="skills__content">
          <h3 class="skills__title">Backend</h3>

          <div class="skills__box">
            {/* 1st column */}
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">PHP</h3>
                  <span class="skills__level">Intermediate</span>
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Node Js</h3>
                  <span class="skills__level">Basic</span>
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Python</h3>
                  <span class="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
            {/* close 1st column */}

            {/* 2nd column */}
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">MySQL</h3>
                  <span class="skills__level">Intermediate</span>
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Firebase</h3>
                  <span class="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
            {/* close 2nd column */}
          </div>
        </div>
        {/* close BACKEND */}

        {/* MORE */}
        <div class="skills__content">
          <h3 class="skills__title">More</h3>

          <div class="skills__box">
            {/* 1st column */}
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Midjourney</h3>
                  <span class="skills__level">AI Image</span>
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">ChatGPT</h3>
                  <span class="skills__level">Basic</span>
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Python</h3>
                  <span class="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
            {/* close 1st column */}

            {/* 2nd column */}
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">MySQL</h3>
                  <span class="skills__level">Intermediate</span>
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Firebase</h3>
                  <span class="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
            {/* close 2nd column */}
          </div>
        </div>
        {/* close MORE */}
        {/* CERTIFICATE */}
        <div class="skills__content">
          <h3 class="skills__title">Certificates</h3>

          <div class="skills__box">
            {/* 1st column */}
            <div class="skills__group">
              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">OpenClassrooms</h3>
                  <span class="skills__level">Web Developer | 2022</span>
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">FreeCodeCamp</h3>
                  <span class="skills__level">Fullstack curriculum | 2023</span>
                </div>
              </div>

              <div class="skills__data">
                <i class="bx bxs-badge-check"></i>

                <div>
                  <h3 class="skills__name">Harvard CS50</h3>
                  <span class="skills__level">Computer Science | 2023</span>
                </div>
              </div>
            </div>
            {/* close 1st column */}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills