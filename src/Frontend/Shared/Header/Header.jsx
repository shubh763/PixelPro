// import Link from 'next/link'
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header id="header">
        <div className="headerInner">
          <div className="container">
            <div className="headerLeft">
              <Link
                to="/"
                id="logo"
                className="logo hashLink"
                title="Parity Chain"
              >
                <img
                  src="/images/logo.png"
                  width="106"
                  height="78"
                  alt="Parity Chain"
                  title="Parity Chain"
                />
              </Link>{" "}
            </div>
            <div className="headerRight">
              <div id="mainNav" className="mainNavigation">
                <div className="menuPart cf">
                  <ul id="nav">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                      <Link to="/technology">Technology</Link>
                    </li>
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>

                    <li>
                      <Link to="#">Our Services</Link>
                      <ul>
                        <li>
                          <Link to="/webdesign-developemnt">
                            Web Design & Development
                          </Link>
                        </li>
                        <li>
                          <Link to="graphic-design">Graphic Design</Link>
                        </li>
                        <li>
                          <Link to="logo-brochure">
                            Logo and Brochure Design
                          </Link>
                        </li>
                        <li>
                          <Link to="digital-marketing">Digital Marketing</Link>
                        </li>
                        <li>
                          <Link to="mobile-app">
                            Mobile App Design & Development
                          </Link>
                        </li>

                        <li>
                          <Link to="content-writing">Content Writing</Link>
                        </li>
                        <li>
                          <Link to="seo">Search Engine Optimization</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/training">Training</Link>
                    </li>
                    <li>
                      <Link to="contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="headerRightBtns">
                <a href="tel:7011996055" className="commonBtn talkExperts">
                  <i className="fa fa-phone"></i>
                  <span>7011996055</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
