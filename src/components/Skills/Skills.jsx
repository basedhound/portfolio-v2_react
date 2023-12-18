import "./skills.css";
import { skillsData, certifsData } from "./data";

const Skills = () => {
  const skills = skillsData;
  const certifs = certifsData;

  return (
    <section className="skills section" id="skills">
      <span className="section__subtitle">Skills</span>
      <h2 className="section__title">Mes compétences</h2>
      <div className="skills__container container grid">
        {/* SKILLS */}
        {skills.map((skill) => (
          <div className="skills__content" key={skill.id}>
            <h3 className="skills__title">{skill.cat}</h3>
            <div className="skills__box">
              {/* col 1 */}
              <div className="skills__group">
                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">{skill.name1}</h3>
                    <span className="skills__level">{skill.desc1}</span>
                  </div>
                </div>
                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">{skill.name2}</h3>
                    <span className="skills__level">{skill.desc2}</span>
                  </div>
                </div>
                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">{skill.name3}</h3>
                    <span className="skills__level">{skill.desc3}</span>
                  </div>
                </div>
              </div>
              {/* col 2 */}
              <div className="skills__group">
                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">{skill.name4}</h3>
                    <span className="skills__level">{skill.desc4}</span>
                  </div>
                </div>
                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">{skill.name5}</h3>
                    <span className="skills__level">{skill.desc5}</span>
                  </div>
                </div>
                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">{skill.name6}</h3>
                    <span className="skills__level">{skill.desc6}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* CERTIFICATES */}
        {certifs.map((certif) => (
          <div className="skills__content" key={certif.id}>
            <h3 className="skills__title">{certif.cat}</h3>
            <div className="skills__box">
              <div className="skills__group">
                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={certif.link1}
                      className="skills__button">
                      <h3 className="skills__name">{certif.name1}</h3>
                      <i className="bx bx-right-arrow-alt skills__icon"></i>
                    </a>
                    <span className="skills__level">{certif.desc1}</span>
                  </div>
                </div>

                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={certif.link2}
                      className="skills__button">
                      <h3 className="skills__name">{certif.name2}</h3>
                      <i className="bx bx-right-arrow-alt skills__icon"></i>
                    </a>
                    <span className="skills__level">{certif.desc2}</span>
                  </div>
                </div>

                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={certif.link3}
                      className="skills__button">
                      <h3 className="skills__name">{certif.name3}</h3>
                      <i className="bx bx-right-arrow-alt skills__icon"></i>
                    </a>
                    <span className="skills__level">{certif.desc3}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
