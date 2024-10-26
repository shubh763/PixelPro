import React from "react";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import AppRouting from "./AppRouting";
import PopupForm from "./Container/Components/PopupForm";

const Layout = () => {
  return (
    <>
     <div id="wrapper">
      <Header />
      <main id="main" className="mainContentArea">
      <AppRouting />
      </main>
      <Footer />
      <PopupForm />
      </div>
    </>
  );
};

export default Layout;
