import React, {useEffect} from 'react'
import InnerBanner from '../Components/InnerBanner'
 import { fetchPageData } from '../../../redux/slice/homeSlice/sliceHome'
 import { useDispatch, useSelector } from "react-redux";

const AboutUs = () => {
  const dispatch = useDispatch();
  const { pageData, loading } = useSelector((state) => state.sliceHome);

  useEffect(() => {
    dispatch(fetchPageData("test"));
  }, [dispatch]);
console.log(pageData);
  return (
   <>
   <InnerBanner title="About Us" />
   <div classNameName='container'>
   <div classNameName="colsBlock ">
          
            <div className="container-xxl ">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}
          >
            <p className="section-title text-secondary fs-1">
              About Us<span></span>
            </p>
            <h2 className="mb-5">Our solution with software development and design </h2>
            <p className="mb-4">
            Offering custom software development tailored to client needs. This includes web, mobile, and desktop applications.
            </p>
            <p>Responsive Design: Ensuring that websites and applications are designed with mobile-first principles.</p>
            <p>Prototyping & Wireframing: Developing wireframes and prototypes using tools like Figma or Adobe XD to map out user flows.</p>

            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Design &amp; Development</p>
                <p className="mb-2">95%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-dark"
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '95%' }}
                ></div>
              </div>
            </div>

            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">Digital Marketing</p>
                <p className="mb-2">85%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>

            <div className="skill mb-4">
              <div className="d-flex justify-content-between">
                <p className="mb-2">SEO &amp; Backlinks</p>
                <p className="mb-2">90%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>

            

            

        



          </div>

          <div className="col-lg-6">
            <img
              className="img-fluid wow zoomIn"
              data-wow-delay="0.5s"
              src="images/about.png"
              alt="About Us"
              style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'zoomIn' }}
            />
          </div>
        </div>
      </div>
    </div>

          </div>
          </div>
   </>
  )
}

export default AboutUs