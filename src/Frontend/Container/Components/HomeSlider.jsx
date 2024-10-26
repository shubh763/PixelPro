
import React,{useRef,useState} from 'react'
import Slider from "react-slick";

const HomeSlider = () => {
  const slider = useRef();
  const [currentSlide, setCurrentSlide] = useState(0); 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    appendDots: (dots) => (
      <div>
        <ul>{dots.slice(0, 3)}</ul>
      </div>
    ),
    customPaging: (i) => <button>{i + 1}</button>,
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
     <section id="indexBanner" className="mainBanner">
      <div className="mainBannerWrap">
        <div className="videoPartLeft">
          {  <video autoPlay muted loop id="myVideo" poster="images/video-bg-img.jpg">
            <source src="/images/banner-video.mp4" type="video/mp4"/>
          </video>  }
        </div>
        <div className="bannerImg bgBackground"><img src="/images/banner-img.png" width="1600" height="931" alt="Parity Chain"/></div>
        <div className="bannerCaption">
          <div className="container posRelative">
            <div className="bannerTextWrap">
              <div className="swiper-container swiper-no-swiping">
                <div className="swiper-wrapper1">
                <Slider ref={slider} {...settings}>
                  <div className="swiper-slide" data-hash="slide1">
                    <div className="mainBannerText"><span className="headSmallText">Innovative</span>IT Solutions</div>
                    <p>Consulting, Development, and Beyond</p>
                  </div>
                  <div className="swiper-slide" data-hash="slide2">
                     <div className="mainBannerText"><span className="headSmallText">Accelerate </span>Your Digital </div>
                    <p>Journey with <br/> Next-Gen Solutions</p>
                  </div>
                  <div className="swiper-slide" data-hash="slide3"> 
                    <div className="mainBannerText"><span className="headSmallText">Innovate,</span>Educate </div>
                    <p>Training for  <br/>Tomorrow's Leaders</p>
                  </div>
                  </Slider>
                </div>
              </div>
              <div className="sliderNavigation">
                <div className="swiper-button-prev" onClick={prevSlide}><i className="fa fa-angle-left"></i></div>
                <div className="swiper-button-next" onClick={nextSlide}><i className="fa fa-angle-right"></i></div>
              </div>
              <div className="customPagination">
                <div className="container posRelative">
                <div className="custompaggingWrap cf">
                      <a href={false} data-hash="slide1" className={`pagination ${currentSlide === 0 ? 'currentNav' : ''}`} onClick={() => goToSlide(0)}>
                        <span className="title">IT cunsulting</span>
                        <span className="paginationText">  Design and<br /> Development</span>
                      </a>
                      <a href={false} data-hash="slide2" className={`pagination ${currentSlide === 1 ? 'currentNav' : ''}`} onClick={() => goToSlide(1)}>
                        <span className="title">Digital Transformation</span>
                         
                      </a>
                      <a href={false} data-hash="slide3" className={`pagination ${currentSlide === 2 ? 'currentNav' : ''}`} onClick={() => goToSlide(2)}>
                        <span className="title">Training</span>
                        <span className="paginationText">Enhancing Your IT Proficiency</span>
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mouseIconWrap">
          <div className="container posRelative"><span className="mouseIcon"><span>Scroll</span></span></div></div>
       </div>
        
</section>
    </>
  )
}

export default HomeSlider
