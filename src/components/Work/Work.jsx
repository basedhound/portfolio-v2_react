import React from 'react'
import './work.css'

const Work = () => {
  return (
    <section class="work section" id="work">
        <span class="section__subtitle">My Portfolio</span>
        <h2 class="section__title">Recent Works</h2>

        <div class="work__filters">
          <span class="work__item active-work" data-filter="all">All</span>
          <span class="work__item" data-filter=".web">Web</span>
          <span class="work__item" data-filter=".movil">Movil</span>
          <span class="work__item" data-filter=".design">Design</span>
        </div>

        <div class="work__container container grid">
          <div class="work__card mix web">
            {/* Insert your image in a rectangular format (Ex: 600 x 400, 1000 x 800, 1200 x 1000, etc) */}
            <img src="assets/img/work1.jpg" alt="" class="work__img" />

            <h3 class="work__title">Web design</h3>

            <a href="" class="work__button">
              Demo <i class="bx bx-right-arrow-alt work__icon"></i>
            </a>
          </div>

          <div class="work__card mix movil">
            <img src="assets/img/work2.jpg" alt="" class="work__img" />
            <h3 class="work__title">App movil</h3>
            <a href="" class="work__button">
              Demo <i class="bx bx-right-arrow-alt work__icon"></i>
            </a>
          </div>

          <div class="work__card mix design">
            <img src="assets/img/work3.jpg" alt="" class="work__img" />
            <h3 class="work__title">Brand design</h3>
            <a href="" class="work__button">
              Demo <i class="bx bx-right-arrow-alt work__icon"></i>
            </a>
          </div>

          <div class="work__card mix web">
            <img src="assets/img/work4.jpg" alt="" class="work__img" />
            <h3 class="work__title">Web design</h3>
            <a href="" class="work__button">
              Demo <i class="bx bx-right-arrow-alt work__icon"></i>
            </a>
          </div>

          <div class="work__card mix movil">
            <img src="assets/img/work5.jpg" alt="" class="work__img" />
            <h3 class="work__title">App movil</h3>
            <a href="" class="work__button">
              Demo <i class="bx bx-right-arrow-alt work__icon"></i>
            </a>
          </div>

        </div>
      </section>
  )
}

export default Work