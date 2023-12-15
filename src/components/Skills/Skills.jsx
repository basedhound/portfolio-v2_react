import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <span className="section__subtitle">Skills</span>
      <h2 className="section__title">Mes compétences</h2>

      {/* CONTAINER */}
      <div className="skills__container container grid">
        {/* FRONTEND */}
        <div className="skills__content">
          <h3 className="skills__title">Frontend</h3>

          <div className="skills__box">
            {/* 1st column */}
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>
                <div>
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__level">Basic</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>
                <div>
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>
                <div>
                  <h3 className="skills__name">Bootstrap</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
            {/* close 1st column */}

            {/* 2nd column */}
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>
                <div>
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>
                <div>
                  <h3 className="skills__name">React</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>
                <div>
                  <h3 className="skills__name">Tailwind</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
            {/* close 2nd column */}
          </div>
        </div>
        {/* close FRONTEND */}

        {/* CERTIFICATE */}
        <div className="skills__content">
          <h3 className="skills__title">Certificates</h3>

          <div className="skills__box">
            {/* 1st column */}
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">OpenClassrooms</h3>
                  <span className="skills__level">Web Developer | 2022</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">FreeCodeCamp</h3>
                  <span className="skills__level">
                    Fullstack curriculum | 2023
                  </span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">Harvard CS50</h3>
                  <span className="skills__level">Computer Science | 2023</span>
                </div>
              </div>
            </div>
            {/* close 1st column */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
