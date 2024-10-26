import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";

const OurTeam = () => {
  const [testimonial, setTestimonial] = useState([]);
  const [loading, setLoading] = useState(true);
  const slider = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Axios request to fetch testimonials
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "https://pixelprotechnologies.com/testapi/api/v1/testimonial"
        );
        setTestimonial(response.data); // Assuming the API returns an array of testimonials
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const nextSlide = () => {
    slider.current.slickNext();
  };

  const prevSlide = () => {
    slider.current.slickPrev();
  };

  const goToSlide = (index) => {
    slider.current.slickGoTo(index);
    setCurrentSlide(index);
  };

  return (
    <>
      {/* Our Team */}
      <section id="ourTeam" className="ourTeam contentBlockPart whiteText">
        <div className="container">
          <div className="centerHeading">
            <h2>Our Partner Says</h2>
          </div>
          <div className="teamSliderWrap">
            <div className="teamSlider">
              <div className="swiper-container swiper-no-swiping">
                <div className="swiper-wrapper-bkp">
                  <Slider ref={slider} {...settings}>
                    {loading ? (
                      <div>Please wait...</div>
                    ) : Array.isArray(testimonial) && testimonial.length > 0 ? (
                      testimonial.map((item, index) => (
                        <div key={index} className="swiper-slide">
                          <div className="teamSlideBox">
                            <div className="teamImgWrap">
                              <div className="teamImgbox">
                                <img
                                  src={`https://pixelprotechnologies.com/${item.field_profile_pic_1}`}
                                  width="185"
                                  height="185"
                                  alt={item.title}
                                  title={item.title}
                                />
                              </div>
                              <div className="socialDetailsTeam">
                                <a
                                  href="https://www.linkedin.com"
                                  className="linkedIn"
                                >
                                  <i className="fa fa-linkedin"></i>
                                </a>
                                <a
                                  href="https://www.twitter.com"
                                  className="twitter"
                                >
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </div>
                            </div>
                            <div className="teamMemberDetial">
                              <h3>{item.title}</h3>
                            </div>
                            <p>{item.field_client_messege_1}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div>No testimonials available</div>
                    )}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
