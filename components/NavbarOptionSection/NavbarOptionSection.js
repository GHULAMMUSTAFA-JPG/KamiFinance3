import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

const NavbarOptionSection = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className={`country pt-120 pb-130 ${props.pClass}`}>
      <div className="container">
        <div className="row mb-30 align-items-center">
          <div className="col-lg-6">
            <div className="sec-title">
              <h2 className="mb-20 wow skewIn">
                Discover Our Services <br /> <span> Tailored for You</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="sec-title mb-20">
              <p>
                Explore our comprehensive range of services designed to meet
                your unique needs. Each tab provides detailed insights into how
                we can assist you.
              </p>
            </div>
          </div>
        </div>
        <Nav tabs className="xb-country-nav nav nav-tabs ul_li_between mb-65">
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Banking & Tax
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Business Setup & Residency
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              Wealth Management
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "4" })}
              onClick={() => {
                toggle("4");
              }}
            >
              Other Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "5" })}
              onClick={() => {
                toggle("5");
              }}
            >
              Contact Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "6" })}
              onClick={() => {
                toggle("6");
              }}
            >
              About Us
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="xb-country ul_li">
              <div className="xb-item--item">
                <div className="xb-item--inner ul_li">
                  <div className="xb-item--flag">
                    <i className="fas fa-university" />
                  </div>
                  <h3 className="xb-item--title">
                    {/* Simplify Your Financial Life with Expert Banking and Tax
                    Solutions */}
                    Banking & Tax
                  </h3>
                  <div className="desc">
                    <p>
                      Navigating the complex world of finance can be
                      challenging, especially when managing assets across
                      borders. Our Banking & Tax services provide you with
                      clear, actionable strategies for managing your finances
                      efficiently. Whether you need assistance with setting up
                      international bank accounts, optimizing tax planning, or
                      understanding the financial regulations of different
                      countries, our expert team is here to guide you through
                      every step. Benefit from personalized advice that helps
                      you make informed decisions and ensures your financial
                      well-being is secured no matter where you are in the
                      world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="xb-country ul_li">
              <div className="xb-item--item">
                <div className="xb-item--inner ul_li">
                  <div className="xb-item--flag">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <h3 className="xb-item--title">
                    {/* Seamless Business Setup and Residency Solutions for Global
                    Success */}
                    Business Setup & Residency
                  </h3>
                  <div className="desc">
                    <p>
                      Seamless Business Setup and Residency Solutions for Global
                      Success" Starting a business or relocating to a new
                      country requires careful planning and execution. Our
                      Business Setup and Residency services offer a
                      comprehensive approach to ensure your entrepreneurial
                      ventures are successful and compliant with local
                      regulations. From assisting with business registration,
                      navigating legal requirements, and securing necessary
                      permits, to guiding you through the residency application
                      process, our team provides end-to-end support. We focus on
                      making your transition smooth, so you can concentrate on
                      growing your business and establishing a new home with
                      confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="3">
            <div className="xb-country ul_li">
              <div className="xb-item--item">
                <div className="xb-item--inner ul_li">
                  <div className="xb-item--flag">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3 className="xb-item--title">
                    {/* Strategic Wealth Management for Long-Term Growth and
                    Security */}
                    Wealth Management
                  </h3>
                  <div className="desc">
                    <p>
                      Effective wealth management is crucial for achieving
                      financial stability and growth. Our Wealth Management
                      services are designed to help you navigate complex
                      investment landscapes and make strategic decisions that
                      align with your financial goals. We offer personalized
                      investment strategies, portfolio management, and risk
                      assessment tailored to your specific needs. Whether you’re
                      looking to grow your wealth, plan for retirement, or
                      protect your assets, our team provides expert guidance and
                      innovative solutions to help you achieve and maintain
                      financial security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="4">
            <div className="xb-country ul_li">
              <div className="xb-item--item">
                <div className="xb-item--inner ul_li">
                  <div className="xb-item--flag">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <h3 className="xb-item--title">
                    {/* Connect with Us for Personalized Assistance and Support */}
                    Other Services
                  </h3>
                  <div className="desc">
                    <p>
                      Beyond our core services, we offer a wide range of
                      specialized solutions to address various aspects of your
                      personal and professional life. From legal consultation
                      and property management to relocation assistance and
                      lifestyle services, we provide tailored support to meet
                      your unique requirements. Our goal is to ensure that every
                      aspect of your journey is covered, allowing you to focus
                      on what matters most. Explore our additional services and
                      discover how we can assist you in achieving your
                      objectives with ease and efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="5">
            <div className="xb-country ul_li">
              <div className="xb-item--item">
                <div className="xb-item--inner ul_li">
                  <div className="xb-item--flag">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h3 className="xb-item--title">
                    {/* Connect with Us for Personalized Assistance and Support */}
                    Contact us
                  </h3>
                  <div className="desc">
                    <p>
                      We value open communication and are dedicated to providing
                      you with the information and support you need. Whether you
                      have questions about our services, require detailed
                      information, or need assistance with specific issues, our
                      team is here to help. Reach out to us through our contact
                      channels, and let us assist you in resolving any concerns
                      or inquiries. Our commitment is to deliver prompt,
                      effective responses and ensure that your experience with
                      us is positive and productive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="6">
            <div className="xb-country ul_li">
              <div className="xb-item--item">
                <div className="xb-item--inner ul_li">
                  <div className="xb-item--flag">
                    <i className="fas fa-info-circle"></i>
                  </div>
                  <h3 className="xb-item--title">
                    {/* Discover Our Mission, Values, and Commitment to Excellence */}
                    About us
                  </h3>
                  <div className="desc">
                    <p>
                      At the heart of our organization lies a commitment to
                      delivering exceptional service and building lasting
                      relationships. Our About Us section provides insight into
                      our mission, core values, and the principles that guide
                      our work. Learn more about our team, our history, and the
                      vision that drives us to continually strive for
                      excellence. We believe in transparency and integrity, and
                      we’re dedicated to supporting our clients with the highest
                      standards of professionalism and care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
        </TabContent>
      </div>
    </section>
  );
};

export default NavbarOptionSection;
