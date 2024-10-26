import React, { useState } from "react";
import InnerBanner from "../Components/InnerBanner";
import { Link } from "react-router-dom";
import OurSolution from "../Components/OurSolution";

const Training = () => {
  return (
    <>
      <InnerBanner title={"Our Training Program"} />
      <div className="container">
        <div className="training-page">
          <header className="header">
            <h1 className="heading" style={{ color: "white" }}>
              Industrial Training Program
            </h1>
          </header>

          <section className="section who-can-join">
            <h2
              style={{
                textAlign: "center",
                fontSize: "32px",
                fontWeight: "200",
              }}
            >
              WHO CAN JOIN THIS TRAINING?
            </h2>
            <p className="mt-4">
              Industrial training from PixelPro Technology, top Industrial
              training Company for CS Student/ CSE Student/ IT Student/ Computer
              Science Student/ B.TECH Student/ BE Student/ M.TECH Student/ BCA
              Student/ MCA Student/ B.Sc Student/ M.Sc Studentis suitable for:
            </p>
            <p>
              Students of BCA, MCA, B.Tech, M.Tech and other IT related degrees
              looking for prior job experience or those who want to enhance
              their knowledge. Any individual who is interested in working on
              live project training can avail this training.
            </p>
            <div className="card-container">
              {/* Card for each student type */}
              <div className="card student-card">
                <img
                  src="/images/computer.jpg"
                  alt="CS Student"
                  className="card-image"
                />
                <h3>CS Student</h3>
                <p>
                  Ideal for Computer Science students looking to gain practical
                  experience.
                </p>
              </div>

              <div className="card student-card">
                <img
                  src="/images/computer_science.jpg"
                  alt="CSE Student"
                  className="card-image"
                />
                <h3>CSE Student</h3>
                <p>
                  Suitable for CSE students to enhance their coding and software
                  development skills.
                </p>
              </div>

              <div className="card student-card">
                <img
                  src="/images/it_student.jpg"
                  alt="IT Student"
                  className="card-image"
                />
                <h3>IT Student</h3>
                <p>
                  Perfect for IT students to learn the latest technologies and
                  industry practices.
                </p>
              </div>

              <div className="card student-card">
                <img
                  src="/images/btech.jpg"
                  alt="B.Tech/BE Student"
                  className="card-image"
                />
                <h3>B.Tech/BE Student</h3>
                <p>
                  Designed for B. Tech and BE students to get hands-on training
                  in their respective fields.
                </p>
              </div>

              <div className="card student-card">
                <img
                  src="/images/mtech_student.jpg"
                  alt="M.Tech Student"
                  className="card-image"
                />
                <h3>M.Tech Student</h3>
                <p>
                  Advanced training for M.Tech students to deepen their
                  technical expertise.
                </p>
              </div>

              <div className="card student-card">
                <img
                  src="/images/bca.jpg"
                  alt="BCA/MCA Student"
                  className="card-image"
                />
                <h3>BCA/MCA Student</h3>
                <p>
                  BCA and MCA students can benefit from practical exposure to
                  real-world projects.
                </p>
              </div>

              <div className="card student-card">
                <img
                  src="/images/bsc_student.jpg"
                  alt="B.Sc/M.Sc Student"
                  className="card-image"
                />
                <h3>B.Sc/M.Sc Student</h3>
                <p>
                  B.Sc and M.Sc students in IT or related fields can sharpen
                  their technical skills.
                </p>
              </div>
            </div>
          </section>

          <section className="section courses">
            <h2
              style={{
                textAlign: "center",
                fontSize: "35px",
                fontWeight: "200",
              }}
            >
              COURSES
            </h2>
            <p className="mt-4">
              The Good Industrial Training for CS/ CSE/ IT/ BCA/MCA/B.Tech/
              M.tech/ B.Sc/ M.sc/ BE/ Engineering students provides 6 months
              Industrial training program in all the domains namely; Computer
              science, Networking, Database, Mechanical, Civil, Electronics and
              Electrical. Some of its training programs include-
            </p>
            <p>
              PHP, CMS (Content Management System), Laravel, Druple, .Net,
              React, Node, Python, Graphic Designing, Web Designing, Mobile App
              Design And Development.
            </p>
          </section>
        </div>
        <div className="btn-container">
          <a href="/images/banner-poster.pdf" className="download-btn" download>
            Download Brochure
          </a>
        </div>
      </div>
    </>
  );
};

export default Training;
