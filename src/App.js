import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Frontend/Layout";
import { useSelector } from "react-redux";
import ScrollToTop from "react-scroll-to-top";
import { Helmet } from "react-helmet";

const App = () => {
  const { fontSize } = useSelector((state) => state.sliceHome);
  return (
    <div className="ACL_App" style={{ fontSize: `${fontSize}px` }}>
      <Helmet>  
        <meta name="description" content="Top software course in noida" />  
      </Helmet>
      <ScrollToTop
        smooth
        viewBox="0 0 24 24"
        svgPath="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z"
      />
      <Routes>
        <Route path="/*" element={<Layout />}></Route>
        
      </Routes>
    </div>
  );
};

export default App;
