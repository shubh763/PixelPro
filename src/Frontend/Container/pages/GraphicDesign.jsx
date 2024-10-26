import React, { useState } from "react";
import InnerBanner from "../Components/InnerBanner";
import { Link } from "react-router-dom";

const GraphicDesign = () => {
  return (
    <>
      <InnerBanner title={"Graphic Design"} />
      <div className="container" style={{ background: "#f5f5f5" }}>
        <div className="contentpart ">
          <h2>
            <span>Kickstart Your Career in Graphic Design</span>{" "}
          </h2>
          <section>
            <p>
              Every design starts with a deep understanding of your brand,
              values, and audience. We work closely with you to ensure that the
              visuals we create align with your brand’s identity and goals.
            </p>
            <p>
              Our design process is rooted in creativity. We explore various
              design concepts that are not only visually stunning but also
              effective in conveying your message, standing out in a crowded
              market, and engaging your target audience.
            </p>
            <p>
              From color schemes and typography to layout and spacing, we focus
              on every detail to ensure that your graphics are polished,
              professional, and ready to make an impact. Whether you need
              digital assets for your website, social media, or print materials,
              we ensure your designs are consistent and cohesive across all
              platforms, strengthening your brand’s visual presence.
            </p>
          </section>
          <section>
            <h2>
              <span>Our Graphic Design Services</span>
            </h2>
            <p className="section-title text-secondary fs-0.9">
              1. Logo Design
            </p>
            <p>
              Your logo is the face of your brand. We craft unique and memorable
              logos that reflect your brand’s essence and leave a lasting
              impression on your audience.
            </p>
            <p className="section-title text-secondary fs-0.9">
              2. Brand Identity Design
            </p>
            <p>
              We build cohesive brand identities that include logos, typography,
              color schemes, and other visual elements to create a consistent
              brand image across all platforms.
            </p>
            <p className="section-title text-secondary fs-0.9">
              3. Brochures & Flyers
            </p>
            <p>
              Our team designs eye-catching brochures and flyers that
              communicate your message clearly, helping you stand out at events,
              trade shows, or as part of your marketing campaigns.
            </p>
            <p className="section-title text-secondary fs-0.9">
              4. Business Cards
            </p>
            <p>
              We design professional, stylish business cards that represent your
              brand and make a strong first impression when networking or
              meeting clients.
            </p>
            <p className="section-title text-secondary fs-0.9">
              5. Social Media Graphics
            </p>
            <p>
              From Instagram posts to Facebook banners, we create custom social
              media graphics that grab attention and engage your audience,
              boosting your online presence.
            </p>
            <p className="section-title text-secondary fs-0.9">
              6. Packaging Design
            </p>
            <p>
              A great product deserves standout packaging. We design creative
              and functional packaging that not only protects your product but
              also attracts customers.
            </p>
            <p className="section-title text-secondary fs-0.9">
              7. Infographics
            </p>
            <p>
              We turn complex information into visually appealing and
              easy-to-understand infographics that enhance your content and
              drive more engagement.
            </p>
            <p className="section-title text-secondary fs-0.9">
              8. Presentation Design
            </p>
            <p>
              Whether for internal use or client pitches, our professionally
              designed presentations will help you communicate your ideas with
              impact and clarity.
            </p>
            <p className="section-title text-secondary fs-0.9">
              9. Web Graphics
            </p>
            <p>
              A great product deserves standout packaging. We design creative
              and functional packaging that not only protects your product but
              also attracts customers.
            </p>
            <p>
              Unlock the potential of mobile technology for your business with
              our cutting-edge mobile app design and development services.
              Contact us today to discuss your project and let’s create
              something extraordinary!
            </p>
            <p>
              At this organisation, we are passionate about creating designs
              that inspire, engage, and drive results. Whether you need a new
              logo, marketing materials, or social media graphics, our team is
              ready to help you elevate your brand's visual appeal.
            </p>
            <p>Contact us today to discuss your graphic design needs!</p>
          </section>
        </div>
        <Link to="/contact-us">
          <button className="learn-more-button">Contact Us</button>
        </Link>
      </div>
    </>
  );
};

export default GraphicDesign;
