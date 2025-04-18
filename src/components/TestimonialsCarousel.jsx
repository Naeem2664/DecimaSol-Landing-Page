import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../assets/images/images";
const testimonials = [
  {
    text: "Teachings of the great explore of truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, pleasure itself",
    name: "Naeem",
    role: "CEO & Founder of Snypse.NRS",
  },
  {
    text: "Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots",
    name: "Ghaffar",
    role: "WHO Member",
  },
  {
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    name: "Amir",
    role: "CEO & Founder of SigmaSoft",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "Bilal",
    role: "Software Engineer at Google",
  },
  {
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    name: "Ali",
    role: "Web Developer at Facebook",
  }
];

const TestimonialCarousel = ({fontsColor}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "5px"
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px"
        }
      }
    ]
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="" style={{
        fontSize:'28px',
        color: fontsColor.lightPeach,
      }}>What Clients Say</h1>
      <div className="row d-flex justify-content-center">
        <div className="carousel-container">
        <Slider {...settings} className="mt-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="d-flex justify-content-center">
            <div className="card mx-2 p-3 shadow-sm border-0" style={{ width: "250px", height: "220px" }}>
              <p className="text-muted small text-left" style={
                {
                    textAlign:'left',
                    overflow: 'hidden',
                    fontSize: '14px',
                    color: fontsColor.black,
                }
              }>{testimonial.text}</p>
              <div className="d-flex align-items-center mt-3 justify-content-center lower-section">
                <img src={images.TestimonialProfile} alt={testimonial.name} className="rounded-circle me-2 align-self-start" style={{ width: "40px", height: "40px",border: `2px solid ${fontsColor.red}` }} />
                <div>
                  <p className="mb-0" style={{ fontSize: "14px",textAlign:'left' }}>{testimonial.name}</p>
                  <small className="" style={{ fontSize: "12px",textAlign:'left',color: fontsColor.lightPeach }}>{testimonial.role}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
        </div>
      
      </div>
      
    </div>
  );
};

export default TestimonialCarousel;
