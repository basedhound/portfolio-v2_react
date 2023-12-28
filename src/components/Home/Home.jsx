import { Typewriter } from "react-simple-typewriter";
import { motion as m } from "framer-motion";
import { Reveal } from "../../utils/Reveal";
import img from "../../assets/img";
import "./home.css";

const Home = () => {
  return (
    <section className="home section" id="home">
        <Reveal>
        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__name">
              <Typewriter
                words={["Frank Vukelić"]}
                loop={1}
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h1>
            <h3 className="home__education">
              Développeur {""}
              <Typewriter
                words={[
                  "",
                  "Web",
                  "Fullstack",
                  "Frontend",
                  "Backend",
                  "/ Designer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h3>
            <div className="home__buttons">
              <m.div
                whileInView={{ opacity: [0, 1], x: [100, 0] }}
                transition={{ duration: 0.25, delay: 0.5 }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/pdf/Ansel-Cv.pdf"
                  className="button button--ghost">
                  Mon CV
                </a>
              </m.div>
              <m.div
                whileInView={{ opacity: [0, 1], x: [100, 0] }}
                transition={{ duration: 0.25, delay: 1 }}>
                <a href="#contact" className="button">
                  Contact
                </a>
              </m.div>
            </div>
          </div>
          <div className="home__handle">
            <img src={img.profile} alt="" className="home__img" />
          </div>
          <a href="#about" className="home__scroll-left">
            <i className="bx bx-mouse home__scroll-icon"></i>
            <span className="home__scroll-name">Scroll Down</span>
          </a>
          <a href="#about" className="home__scroll-right">
            <i className="bx bx-mouse home__scroll-icon"></i>
            <span className="home__scroll-name">Scroll Down</span>
          </a>
        </div>
    </Reveal>
      </section>
  );
};

export default Home;
