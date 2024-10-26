import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Container/pages/Home/Home";
import Contact from "./Container/pages/Contact";
import AboutUs from "./Container/pages/AboutUs";
import WebdesignDevelopment from "./Container/pages/WebdesignDevelopment";
import GraphicDesign from "./Container/pages/GraphicDesign";
import LogoBrochure from "./Container/pages/LogoBrochure";
import DigitallMarketing from "./Container/pages/DigitallMarketing";
import MobileDevelopment from "./Container/pages/MobileDevelopment";
import ContentWriting from "./Container/pages/ContentWriting";
import Seo from "./Container/pages/Seo";
import NotFound from "./Container/pages/NotFound";
import Technologies from "./Container/pages/Technologies";
import Training from "./Container/pages/Training";
import Portfolio from "./Container/pages/Portfolio";

const AppRouting = () => {
  return (
    <Routes>
      {/* Main Menu */}
      <Route path="/" element={<Home />}></Route>

      <Route path="contact-us" element={<Contact title="Contact Us" />}></Route>
      <Route path="aboutus" element={<AboutUs title="About Us" />}></Route>
      <Route
        path="webdesign-developemnt"
        element={<WebdesignDevelopment />}
      ></Route>
      <Route path="graphic-design" element={<GraphicDesign />}></Route>
      <Route path="logo-brochure" element={<LogoBrochure />}></Route>
      <Route path="digital-marketing" element={<DigitallMarketing />}></Route>
      <Route path="mobile-app" element={<MobileDevelopment />}></Route>
      <Route path="content-writing" element={<ContentWriting />}></Route>
      <Route path="seo" element={<Seo />}></Route>
      <Route path="technology" element={<Technologies />}></Route>
      <Route path="training" element={<Training />}></Route>
      <Route path="portfolio" element={<Portfolio />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouting;
