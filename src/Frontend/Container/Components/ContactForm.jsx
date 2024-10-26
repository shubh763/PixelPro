import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import qs from "qs";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      organization_name: "",
      mobile_no: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full Name is required"),
      organization_name: Yup.string().required("Company Name is required"),
      mobile_no: Yup.string().required("Phone is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().max(
        500,
        "description must be 500 characters or less"
      ),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          "https://pixelprotechnologies.com/testapi/vi/feedback",
          values, // Send data as JSON
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } } // Set content type to JSON
        );
        alert("Query sent successfully We will reach you Shortly");
        console.log(response);
        resetForm();
      } catch (error) {
        console.error("Error sending description", error);
        alert("Failed to send description");
      }
    },
  });

  const handleInputChange = (e) => {
    formik.handleChange(e);
    if (e.target.value) {
      e.target.classList.add("hasValue");
    } else {
      e.target.classList.remove("hasValue");
    }
  };

  const handleInputBlur = (e) => {
    formik.handleBlur(e);
    if (e.target.value) {
      e.target.classList.add("hasValue");
    } else {
      e.target.classList.remove("hasValue");
    }
  };

  return (
    <>
      {/* Get in TOUCH */}
      <section id="getInTouch" className="getInTouch contentBlockPart">
        <div className="container">
          .
          <div className="getInTouchFormWrap">
            <div className="getInTouchFormInner">
              <div className="centerHeading">
                <h2>GET IN TOUCH</h2>
                <p>We’re ready to Lead you into the Future </p>
              </div>
              <div className="getInTouchFormOuter">
                <form id="getInTouchForm" onSubmit={formik.handleSubmit}>
                  <div className="feildRow cf">
                    <div className="feildCol">
                      <div className="feildInput">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formik.values.name}
                          onChange={handleInputChange}
                          onBlur={handleInputBlur}
                          placeholder="Full Name"
                        />
                        <label htmlFor="fullName">
                          Full Name <em>*</em>
                        </label>
                        {formik.touched.name && formik.errors.name ? (
                          <div className="error">{formik.errors.name}</div>
                        ) : null}
                        <i className="fa fa-user"></i>
                      </div>
                    </div>
                    <div className="feildCol">
                      <div className="feildInput">
                        <input
                          type="text"
                          id="organization_name"
                          name="organization_name"
                          value={formik.values.organization_name}
                          onChange={handleInputChange}
                          onBlur={handleInputBlur}
                          placeholder="Company Name"
                        />
                        <label htmlFor="organization_name">
                          Company/Organization <em>*</em>
                        </label>
                        {formik.touched.companyName &&
                        formik.errors.organization_name ? (
                          <div className="error">
                            {formik.errors.organization_name}
                          </div>
                        ) : null}
                        <i className="fa fa-building"></i>
                      </div>
                    </div>
                  </div>
                  <div className="feildRow cf">
                    <div className="feildCol">
                      <div className="feildInput">
                        <input
                          type="text"
                          id="mobile_no"
                          name="mobile_no"
                          value={formik.values.mobile_no}
                          onChange={handleInputChange}
                          onBlur={handleInputBlur}
                          placeholder="Phone"
                        />
                        <label htmlFor="mobile_no">
                          Phone <em>*</em>
                        </label>
                        {formik.touched.mobile_no && formik.errors.mobile_no ? (
                          <div className="error">{formik.errors.mobile_no}</div>
                        ) : null}
                        <i className="fa fa-phone"></i>
                      </div>
                    </div>
                    <div className="feildCol">
                      <div className="feildInput">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          value={formik.values.email}
                          onChange={handleInputChange}
                          onBlur={handleInputBlur}
                          placeholder="Email"
                        />
                        <label htmlFor="email">
                          Email <em>*</em>
                        </label>
                        {formik.touched.email && formik.errors.email ? (
                          <div className="error">{formik.errors.email}</div>
                        ) : null}
                        <i className="fa fa-at"></i>
                      </div>
                    </div>
                  </div>
                  <div className="feildRow cf fullWidth messageFeild">
                    <div className="feildCol">
                      <div className="feildInput">
                        <textarea
                          id="message"
                          name="message"
                          value={formik.values.message}
                          onChange={handleInputChange}
                          onBlur={handleInputBlur}
                          maxLength="500"
                          placeholder="Message"
                        />
                        <label htmlFor="message">Message</label>
                        {formik.touched.message && formik.errors.message ? (
                          <div className="error">{formik.errors.message}</div>
                        ) : null}
                        <i className="fa fa-envelope-o"></i>
                      </div>
                    </div>
                  </div>
                  <div className="btnRowWithCaptch  cf">
                    <div className="btnRight">
                      <button
                        className="commonBtn contactFormBtn"
                        type="submit"
                      >
                        <span>Submit</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
