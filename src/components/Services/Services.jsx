import React from 'react'
import './services.css'

const Services = () => {

const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

  return (
    <section className="services section">
      <span className="section__subtitle">My Services</span>
      <h2 className="section__title">What I Offer</h2>

      <div className="services__container container grid">
        <div className="services__card">
          <h3 className="services__title">
            Product <br />
            Designer
          </h3>

          <span className="services__button">
            See more <i className="bx bx-right-arrow-alt services__icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i className="bx bx-x services__modal-close"></i>

              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-list">
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__card">
          <h3 className="services__title">
            Ui/Ux <br />
            Designer
          </h3>

          <span className="services__button">
            See more <i className="bx bx-right-arrow-alt services__icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i className="bx bx-x services__modal-close"></i>

              <h3 className="services__modal-title">Ui/Ux Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-list">
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__card">
          <h3 className="services__title">
            Visual <br />
            Designer
          </h3>

          <span className="services__button">
            See more <i className="bx bx-right-arrow-alt services__icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i className="bx bx-x services__modal-close"></i>

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-list">
                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-item">
                  <i className="bx bx-check services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services