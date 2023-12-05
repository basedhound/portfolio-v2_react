import React from 'react'
import './testimonials.css'

const Testimonials = () => {
  return (
    <section class="testimonial section">
      <span class="section__subtitle">My clients say</span>
      <h2 class="section__title">Testimonial</h2>

      <div class="testimonial__container container swiper">
        <div class="swiper-wrapper">
          <div class="testimonial__card swiper-slide">
            <img
              src="assets/img/testimonial1.png"
              alt=""
              class="testimonial__img"
            />

            <h3 class="testimonial__name">Jhon Doe</h3>
            <p class="testimonial__description">
              A really good job, all aspects of the project were followed step
              by step and with good results.
            </p>
          </div>

          <div class="testimonial__card swiper-slide">
            <img
              src="assets/img/testimonial2.png"
              alt=""
              class="testimonial__img"
            />

            <h3 class="testimonial__name">Paula Vusy</h3>
            <p class="testimonial__description">
              A really good job, all aspects of the project were followed step
              by step and with good results.
            </p>
          </div>

          <div class="testimonial__card swiper-slide">
            <img
              src="assets/img/testimonial3.png"
              alt=""
              class="testimonial__img"
            />

            <h3 class="testimonial__name">Sara Cill</h3>
            <p class="testimonial__description">
              A really good job, all aspects of the project were followed step
              by step and with good results.
            </p>
          </div>
        </div>

        <div class="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default Testimonials