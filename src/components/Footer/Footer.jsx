import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__container container">
        {/* <h1 class="footer__title">Frank Vukelic</h1> */}

                       {/* <ul class="footer__list">
                    <li>
                        <a href="#about" class="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#work" class="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonial" class="footer__link">Testimonials</a>
                    </li>
                </ul> */}

        <ul class="footer__social">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            class="footer__social-link">
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            class="footer__social-link">
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            class="footer__social-link">
            <i class="bx bxl-facebook"></i>
          </a>
        </ul>

        <span class="footer__copy"> &#169; F.V. All rigths reserved </span>
      </div>
    </footer>
  )
}

export default Footer