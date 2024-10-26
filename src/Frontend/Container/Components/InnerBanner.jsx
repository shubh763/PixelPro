import React from "react";

const InnerBanner = ({ title }) => {
  return (
    <>
      <section id="innerBanner" className="innerBanner bgBackground">
        <img
          src="images/inner-banner-img-new.jpg"
          width="1600"
          height="643"
          alt="Blockchain Development"
          title="Blockchain Development"
        />
        <div className="bannerCaption">
          <div className="container posRelative">
            <div className="bannerTextWrap">
              {/* <h1>{title}</h1> */}
              <div className="breadCumWrap">
                <ul className="breadCum">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <span>{title}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="movingBox spriteIcon smartContractDevIcon noAnimate"
              data-paroller-factor="-0.1"
              data-paroller-type="foreground"
            ></div>
          </div>
        </div>
        <a href="#schduleCallPop" className="commonBtn floatBtnRight popupOpen">
          <span className="btnWrap">
            <i className="fa fa-phone"></i>{" "}
            <span className="btnText">Talk to Expert</span>
          </span>
        </a>{" "}
      </section>
    </>
  );
};

export default InnerBanner;
