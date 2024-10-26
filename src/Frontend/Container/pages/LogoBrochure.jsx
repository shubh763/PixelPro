import React, { useState } from "react";
import InnerBanner from "../Components/InnerBanner";
import { Link } from "react-router-dom";

const LogoBrochure = () => {
  return (
    <>
      <InnerBanner title={"Logo and Brochure Design"} />
      <div className="container" style={{ background: "#f5f5f5" }}>
        <div className="contentpart ">
          <h2>
            <span>Kickstart your career in Logo Design</span>
          </h2>
          <section>
            <p>
              Your logo is more than just an image; it’s the heart of your
              brand’s identity. It’s the first thing people notice about your
              business and the lasting impression they take away. At our
              organisation, we specialize in designing unique, timeless logos
              that not only stand out but also capture the essence of your
              brand.
            </p>
            <p>
              Every logo we create is 100% original, custom-tailored to your
              brand’s personality and needs. No templates, no shortcuts. We
              ensure your logo works seamlessly across all platforms, from
              websites and social media to business cards, merchandise, and
              beyond. Our team of skilled designers brings years of experience
              and creativity to each project, delivering logos that stand the
              test of time.
            </p>
          </section>
          <section>
            <h2>
              {" "}
              <span>Types of Logos We Create</span>{" "}
            </h2>
            <ul>
              <li>
                <strong>Wordmark Logos:</strong> Clean and minimal, wordmark
                logos use only text to communicate your brand’s identity,
                focusing on custom fonts and typography.
              </li>
              <li>
                <strong>Monogram Logos:</strong> A letter-based logo that uses
                initials or abbreviations to represent your business, ideal for
                brands with longer names.
              </li>
              <li>
                <strong>Combination Logos:</strong> A mix of text and icon,
                providing flexibility in how you present your brand across
                different platforms and materials.
              </li>
              <li>
                <strong>Emblem Logos:</strong> Often incorporating text within a
                symbol or icon, emblem logos give a traditional, authoritative
                feel, often used by institutions or companies with a long
                heritage.
              </li>
              <li>
                <strong>Symbolic Logos:</strong> Simple yet powerful symbols
                that stand alone or complement your brand name, helping
                customers instantly recognize your business.
              </li>
            </ul>
          </section>
          <section>
            <h2>
              <span>Our Logo Design Process</span>
            </h2>
            <p>
              At our organisation, we take a collaborative, client-centered
              approach to logo design, ensuring that every logo we create is a
              true reflection of your brand’s identity.
            </p>
            <p className="section-title text-secondary fs-0.9">
              1. Discovery & Research
            </p>

            <p>
              We start by getting to know your business, understanding your
              target audience, and learning about your industry. This helps us
              identify the core message your logo should convey and the style
              that best suits your brand.
            </p>
            <p className="section-title text-secondary fs-0.9">
              2. Creative Concept Development
            </p>
            <p>
              Our team brainstorms and develops multiple logo concepts,
              experimenting with different design elements, including shapes,
              colors, and typography. Each concept is designed to reflect your
              brand’s values and goals.
            </p>
            <p className="section-title text-secondary fs-0.9">
              3. Feedback & Refinement
            </p>
            <p>
              We present you with several logo options and work closely with you
              to refine the design based on your feedback. Your input is
              essential, and we strive to ensure the final logo meets your
              expectations.
            </p>
            <p className="section-title text-secondary fs-0.9">
              4. Finalization & Delivery
            </p>
            <p>
              Once the logo design is perfected, we deliver it in all necessary
              formats (vector, high-resolution, etc.), ensuring it’s ready for
              use across digital and print platforms.
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

export default LogoBrochure;
