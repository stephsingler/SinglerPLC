import React from 'react';
import Slider from 'react-slick';

const Testimonial = props => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  const renderTestimonials = () => {
    return (
      props.testimonials.map((testimonial) => {
        return (
          <div className="testimonial-background" key={testimonial.id}>
            <div className="testimonial-container" style={{display: 'flex'}}>
              <div className="single-testimonial">
                "{testimonial.testimonial1}" <br/><br />
                <h5>{testimonial.author1}</h5>
                <h6>{testimonial.title1}</h6>
              </div>
              <div className="single-testimonial">
                "{testimonial.testimonial2}"<br/><br />
                <h5>{testimonial.author2}</h5>
                <h6>{testimonial.title2}</h6>
              </div>
              <div className="single-testimonial">
                "{testimonial.testimonial3}"<br/><br />
                <h5>{testimonial.author3}</h5>
                <h6>{testimonial.title3}</h6>
              </div>
            </div>
          </div>
        );
      })
    );
  }
  return (
    <Slider {...settings}>
      {renderTestimonials()}
    </Slider>
  );
}
export default Testimonial;
