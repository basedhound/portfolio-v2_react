import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";
import data from "./data";

const Testimonials = () => {
  
  // Mapping data
  const reviews = data;

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
          {reviews.map((review) => (
            <SwiperSlide
              key={review.id}
              className="testimonial__card swiper-slide">
              <img src={review.img} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{review.name}</h3>
              <p className="testimonial__description">{review.desc}</p>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Testimonials;
