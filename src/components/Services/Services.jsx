import { useState, useEffect } from "react";
import "./services.css";
import data from "./data";

const Services = () => {
  // Mapping data
  const services = data;

  // Display correct data in each modal
  const [selectedService, setSelectedService] = useState(null);

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains("services__modal")) {
        closeModal();
      }
    };
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <section className="services section">
      <span className="section__subtitle">Mes compétences</span>
      <h2 className="section__title">à votre service</h2>

      <div className="services__container container grid">
        {services.map((service) => (
          <div className="services__card" key={service.id}>
            <h3 className="services__title">
              {service.title1}
              <br />
              {service.title2}
            </h3>

            <span
              className="services__button"
              onClick={() => openModal(service)}>
              En savoir plus
              <i className="bx bx-right-arrow-alt services__icon"></i>
            </span>

            <div
              className={`services__modal ${
                isModalOpen ? "active-modal" : ""
              }`}>
              <div className="services__modal-content">
                <i
                  className="bx bx-x services__modal-close"
                  onClick={closeModal}></i>

                <h3 className="services__modal-title">
                  {selectedService?.title}
                </h3>
                <p className="services__modal-description">
                  {selectedService?.desc}
                </p>

                <ul className="services__modal-list">
                  <li className="services__modal-item">
                    <i className="bx bx-check services__modal-icon"></i>
                    <p className="services__modal-info">
                      {selectedService?.info1}
                    </p>
                  </li>

                  <li className="services__modal-item">
                    <i className="bx bx-check services__modal-icon"></i>
                    <p className="services__modal-info">
                      {selectedService?.info2}
                    </p>
                  </li>

                  <li className="services__modal-item">
                    <i className="bx bx-check services__modal-icon"></i>
                    <p className="services__modal-info">
                      {selectedService?.info3}
                    </p>
                  </li>

                  <li className="services__modal-item">
                    <i className="bx bx-check services__modal-icon"></i>
                    <p className="services__modal-info">
                      {selectedService?.info4}
                    </p>
                  </li>

                  <li className="services__modal-item">
                    <i className="bx bx-check services__modal-icon"></i>
                    <p className="services__modal-info">
                      {selectedService?.info5}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;
