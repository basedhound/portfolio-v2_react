import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";
import img from "../../assets/img";

const Testimonials = () => {
  return (
    <section className="testimonial section">
      <span className="section__subtitle">My clients say</span>
      <h2 className="section__title">Testimonial</h2>

      <div className="testimonial__container container">
        <Swiper
          initialSlide={0}
          spaceBetween={50}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          loop={true}
          // slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 576px
            576: {
              slidesPerView: 2,
            },
          }}>
          <SwiperSlide className="testimonial__card swiper-slide">
            <img src={img.testimonial1} alt="" className="testimonial__img" />
            <h3 className="testimonial__name">Jhon Doe</h3>
            <p className="testimonial__description">
              A really good job, all aspects of the project were followed step
              by step and with good results.
            </p>
          </SwiperSlide>

          <SwiperSlide className="testimonial__card swiper-slide">
            <img src={img.testimonial2} alt="" className="testimonial__img" />
            <h3 className="testimonial__name">Paula Vusy</h3>
            <p className="testimonial__description">
              A really good job, all aspects of the project were followed step
              by step and with good results.
            </p>
          </SwiperSlide>

          <SwiperSlide className="testimonial__card swiper-slide">
            <img src={img.testimonial3} alt="" className="testimonial__img" />
            <h3 className="testimonial__name">Sara Cill</h3>
            <p className="testimonial__description">
              A really good job, all aspects of the project were followed step
              by step and with good results.
            </p>
          </SwiperSlide>
        </Swiper>

        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Testimonials;
