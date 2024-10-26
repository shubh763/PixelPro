import React, { useState } from "react";
import InnerBanner from "../Components/InnerBanner";
import { Link } from "react-router-dom";

const Seo = () => {
  return (
    <>
      <InnerBanner title={"Search Engine Optimization"} />

      <div className="container" style={{ background: "#f5f5f5" }}>
        <div className="contentpart ">
          <h2>
            <span>Kickstart your career in SEO</span>
          </h2>
          <section>
            <p>
              In today’s digital landscape, having a website is just the
              beginning. To truly succeed, you need to be easily found by
              potential customers. At this organisation, our comprehensive SEO
              (Search Engine Optimization) services are designed to boost your
              online visibility, drive targeted traffic, and improve your search
              engine rankings.
            </p>
          </section>

          <section>
            <h2>
              <span>Our SEO Services</span>
            </h2>
            <p className="section-title text-secondary fs-0.9">
              1. Keyword Research & Strategy
            </p>
            <p>
              We conduct in-depth keyword research to identify the most relevant
              and profitable keywords for your business, ensuring your website
              ranks for search terms that matter most to your audience.
            </p>
            <p className="section-title text-secondary fs-0.9">
              2. On-Page Optimization
            </p>
            <p>
              Our team optimizes every element of your website, from meta tags
              and headings to content and internal links, ensuring it meets the
              latest SEO best practices for higher search engine rankings.
            </p>
            <p className="section-title text-secondary fs-0.9">
              3. Technical SEO
            </p>
            <p>
              We identify and resolve technical issues that may be hindering
              your site’s performance, including improving website speed,
              mobile-friendliness, XML sitemaps, and more to ensure your site is
              search engine-friendly.
            </p>
            <p className="section-title text-secondary fs-0.9">
              4. Content Optimization
            </p>
            <p>
              SEO-optimized content is the foundation of higher rankings. We
              help you create and optimize website copy, blog posts, and other
              content that is engaging, informative, and tailored to attract
              both users and search engines.
            </p>
            <p className="section-title text-secondary fs-0.9">
              5. Link Building
            </p>
            <p>
              High-quality backlinks are critical for SEO success. We develop a
              white-hat link-building strategy to boost your site’s authority
              and rankings by earning links from relevant, authoritative
              websites.
            </p>
            <p className="section-title text-secondary fs-0.9">6. Local SEO</p>
            <p>
              For businesses that rely on local customers, we optimize your
              online presence for local search results. From optimizing your
              Google Business Profile to local citations, we help you get found
              by local customers when they search for services like yours.
            </p>
            <p className="section-title text-secondary fs-0.9">7. SEO Audits</p>
            <p>
              Our thorough SEO audit identifies weaknesses and opportunities for
              improvement on your website. We assess everything from page
              structure to backlink profile, providing actionable
              recommendations to enhance your SEO performance.
            </p>
            <p className="section-title text-secondary fs-0.9">8. Mobile SEO</p>
            <p>
              With mobile search now dominating, we ensure your website is fully
              optimized for mobile devices, providing a seamless user experience
              and improving your chances of ranking well in mobile search
              results.
            </p>
            <p className="section-title text-secondary fs-0.9">
              9. Ongoing Monitoring & Reporting
            </p>
            <p>
              SEO is an ongoing process, and we monitor your performance
              regularly. We provide detailed monthly reports on keyword
              rankings, traffic growth, and overall SEO progress to keep you
              informed of your results.
            </p>
            <p>
              Effective SEO is key to staying competitive in today’s online
              market. With our expertise, your website can rank higher, attract
              more traffic, and convert visitors into customers. Let us help you
              improve your online visibility and grow your business through our
              expert SEO services.
            </p>
            <p>
              Contact us today to start optimizing your website for success!
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

export default Seo;
