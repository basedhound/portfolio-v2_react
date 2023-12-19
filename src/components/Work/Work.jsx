import { useEffect, useState } from "react";
import { Reveal, SlideReveal } from "../../utils/Reveal";
import "./work.css";
import data from "./data";

const Work = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  // Set projects and categories
  useEffect(() => {
    setProjects(data);
    setCategories([...new Set(data.map((item) => item.cat))]);
  }, []);

  // Filter
  const handleFilter = (category) => {
    if (category === "All") {
      setProjects(data);
    } else {
      const filteredData = data.filter((item) => item.cat === category);
      setProjects(filteredData);
    }
    setActiveFilter(category);
  };

  return (
    <section className="work section" id="work">
      <Reveal>
        <span className="section__subtitle">My Portfolio</span>
        <h2 className="section__title">Recent Works</h2>    
        
      {/* Filter : All */}    
        <ul className="work__filters">
          <button
            className={`work__filter ${
              activeFilter === "All" ? "active-filter" : ""
            }`}
            onClick={() => handleFilter("All")}>
            All
          </button>
          {/* Filters : Categories */}
          {categories.map((category) => (
            <button
              className={`work__filter ${
                activeFilter === category ? "active-filter" : ""
              }`}
              key={category}
              onClick={() => handleFilter(category)}>
              {category}
            </button>
          ))}
        </ul>
      </Reveal>

      {/* Gallery */}
      <div className="work__container container grid">
        {projects.map((project) => (
          <SlideReveal key={project.id}>
            <div className="work__card mix web">
              <img src={project.img} alt="" className="work__img" />
              <h3 className="work__title">{project.name}</h3>
              <div className="work__links">
                <a
                  href={project.link}
                  className="work__button"
                  target="_blank"
                  rel="noopener noreferrer">
                  Live
                  <i className="bx bx-right-arrow-alt work__icon"></i>
                </a>
                <a href={project.link} className="work__button" target="_blank">
                  Github
                  <i className="bx bx-right-arrow-alt work__icon"></i>
                </a>
              </div>
            </div>
          </SlideReveal>
        ))}
      </div>
    </section>
  );
};

export default Work;
