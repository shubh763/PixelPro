import React, { useEffect } from "react";
import InnerBanner from "../Components/InnerBanner";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <>
      <InnerBanner title={"Contact Us"} />
      <ContactForm />
    </>
  );
};

export default Contact;
