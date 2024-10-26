import React, { useState } from "react";
import InnerBanner from "../Components/InnerBanner";
import { Link } from "react-router-dom";

const DigitallMarketing = () => {
  return (
    <>
      <InnerBanner title={"Digital Marketing"} />
      <div className="container" style={{ background: "#f5f5f5" }}>
        <div className="contentpart ">
          <h2>
            <span>Kickstart your career in Digital Marketing</span>
          </h2>
          <section>
            <p>
              In today’s fast-paced digital world, establishing a strong online
              presence is essential for business growth. Our comprehensive
              digital marketing services are designed to elevate your brand,
              engage your target audience, and drive measurable results.
            </p>
          </section>

          <section>
            <p className="section-title text-secondary fs-0.9">
              1. Search Engine Optimization (SEO)
            </p>

            <p>
              Improve your website’s visibility and ranking on search engines
              with our advanced SEO strategies tailored to your business needs.
            </p>
            <p className="section-title text-secondary fs-0.9">
              2. Social Media Marketing (SMM)
            </p>
            <p>
              Boost your brand’s presence across social media platforms like
              Facebook, Instagram, Twitter, and LinkedIn, with tailored
              campaigns that engage your audience and foster brand loyalty.
            </p>
            <p className="section-title text-secondary fs-0.9">
              3. Pay-Per-Click Advertising (PPC)
            </p>
            <p>
              Maximize your ROI with targeted ads that generate high-quality
              leads and increase conversions. We specialize in creating
              data-driven campaigns that meet your business goals.
            </p>
            <p className="section-title text-secondary fs-0.9">
              4. Content Marketing
            </p>
            <p>
              Engage your audience with compelling and informative content,
              including blogs, articles, videos, and infographics that
              strengthen your brand’s message.
            </p>
            <p className="section-title text-secondary fs-0.9">
              5. Email Marketing
            </p>
            <p>
              Reach your audience directly through personalized email campaigns
              that nurture leads, promote products, and build customer
              relationships.
            </p>
            <p className="section-title text-secondary fs-0.9">
              6. Conversion Rate Optimization (CRO)
            </p>
            <p>
              Enhance your website’s user experience and increase the percentage
              of visitors who convert into customers with our expert CRO
              services.
            </p>
            <p className="section-title text-secondary fs-0.9">
              7. Online Reputation Management (ORM)
            </p>
            <p>
              Safeguard your brand’s reputation by monitoring, managing, and
              responding to online reviews and feedback.
            </p>
            <p>
              Let us help you achieve your digital marketing goals and grow your
              business in the digital space. Reach out to learn how we can
              tailor strategies to drive success for your brand.
            </p>
          </section>
        </div>
        <Link to="/contact-us">
          <button className="learn-more-button">Contact Us</button>
        </Link>
      </div>
    </>
  );
};

export default DigitallMarketing;
