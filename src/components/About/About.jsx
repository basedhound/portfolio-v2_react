import { motion as m } from "framer-motion";
import { Reveal, SlideReveal } from "../../utils/Reveal";
import { Typewriter } from "react-simple-typewriter";
import "./about.css";
import img from "../../assets/img";

const About = () => {
  return (
    <section className="about section" id="about">
      <Reveal>
        <span className="section__subtitle">Intro</span>
        <h2 className="section__title">À propos</h2>
      </Reveal>
      <SlideReveal>
        <div className="about__container container grid">
          <img src={img.about} alt="" className="about__img" />
          <div className="about__data">
            <div className="about__info">
              <m.div
                whileInView={{ opacity: [0, 1], x: [100, 0] }}
                transition={{ duration: 0.25, delay: 0.5 }}
                className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Expérience</h3>
                <span className="about__subtitle">3 ans</span>
              </m.div>
              <m.div
                whileInView={{ opacity: [0, 1], x: [100, 0] }}
                transition={{ duration: 0.25, delay: 0.75 }}
                className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Réalisé</h3>
                <span className="about__subtitle"> + de 30 Projets</span>
              </m.div>
              <m.div
                whileInView={{ opacity: [0, 1], x: [100, 0] }}
                transition={{ duration: 0.25, delay: 1 }}
                className="about__box">
                <i className="bx bx-support about__icon"></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Professionnel</span>
              </m.div>
            </div>
            <p className="about__description">
              <Typewriter
                words={[
                  "Développeur frontend expérimenté, spécialisé React/Next. Compétences backend via Node.js pour des applications fullstack réussies. Mon travail a déjà satisfait de nombreux clients.",
                ]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={20}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </p>
            <div className="about__button--wrap">
              <a href="#contact" className="button">
                Contact
              </a>
            </div>
          </div>
        </div>
      </SlideReveal>
    </section>
  );
};

export default About;
