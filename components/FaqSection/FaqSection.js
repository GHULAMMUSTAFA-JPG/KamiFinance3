import React, { useState } from "react";
import fImg1 from "/public/images/faq/faq_img.png";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import Image from "next/image";

const FaqSection = (props) => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <section className="faq pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="xb-faq-content">
              <div className="sec-title mb-125">
                <h2 className="mb-30 wow skewIn">
                  Frequently Asked Questions <br />{" "}
                  <span> About Our Services</span>
                </h2>
                <p>
                  We provide a wide range of services, and here are answers to
                  some common questions to help you make informed decisions.
                </p>
              </div>
              <div className="faq-img">
                <Image src={fImg1} alt="FAQ" />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="xb-faq">
              <Accordion open={open} toggle={toggle} className="accordion_box">
                <AccordionItem className="block">
                  <AccordionHeader targetId="1" className="acc-btn">
                    What banking and tax services do you offer?
                    <span className="arrow"></span>
                  </AccordionHeader>
                  <AccordionBody accordionId="1" className="acc_body">
                    <div className="content">
                      <p>
                        Our banking and tax services are designed to simplify
                        your financial management, both locally and
                        internationally. We provide:
                      </p>
                      <ul>
                        <li>
                          <i className="far fa-check"></i> International Banking
                          Solutions
                        </li>
                        <li>
                          <i className="far fa-check"></i> Tax Optimization and
                          Planning
                        </li>
                        <li>
                          <i className="far fa-check"></i> Compliance with Local
                          and Global Tax Regulations
                        </li>
                      </ul>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className="block">
                  <AccordionHeader targetId="2" className="acc-btn">
                    How do you assist with business setup and residency?
                    <span className="arrow"></span>
                  </AccordionHeader>
                  <AccordionBody accordionId="2" className="acc_body">
                    <div className="content">
                      <p>
                        We offer end-to-end support for setting up your business
                        and securing residency. Our services include:
                      </p>
                      <ul>
                        <li>
                          <i className="far fa-check"></i> Business Registration
                          and Compliance
                        </li>
                        <li>
                          <i className="far fa-check"></i> Residency and Work
                          Permit Applications
                        </li>
                        <li>
                          <i className="far fa-check"></i> Legal and Regulatory
                          Guidance
                        </li>
                      </ul>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className="block">
                  <AccordionHeader targetId="3" className="acc-btn">
                    What does your wealth management involve?
                    <span className="arrow"></span>
                  </AccordionHeader>
                  <AccordionBody accordionId="3" className="acc_body">
                    <div className="content">
                      <p>
                        Our wealth management services are tailored to help you
                        achieve your financial goals. We provide:
                      </p>
                      <ul>
                        <li>
                          <i className="far fa-check"></i> Personalized
                          Investment Strategies
                        </li>
                        <li>
                          <i className="far fa-check"></i> Asset Protection and
                          Growth
                        </li>
                        <li>
                          <i className="far fa-check"></i> Comprehensive
                          Financial Planning
                        </li>
                      </ul>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className="block">
                  <AccordionHeader targetId="4" className="acc-btn">
                    What other services do you offer?
                    <span className="arrow"></span>
                  </AccordionHeader>
                  <AccordionBody accordionId="4" className="acc_body">
                    <div className="content">
                      <p>
                        In addition to our core services, we offer a range of
                        specialized solutions to address various needs:
                      </p>
                      <ul>
                        <li>
                          <i className="far fa-check"></i> Legal and Compliance
                          Services
                        </li>
                        <li>
                          <i className="far fa-check"></i> Property Management
                          and Relocation
                        </li>
                        <li>
                          <i className="far fa-check"></i> Customized Lifestyle
                          and Support Services
                        </li>
                      </ul>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className="block">
                  <AccordionHeader targetId="5" className="acc-btn">
                    How can I get started with your services?
                    <span className="arrow"></span>
                  </AccordionHeader>
                  <AccordionBody accordionId="5" className="acc_body">
                    <div className="content">
                      <p>
                        Getting started is easy. Simply reach out to us through
                        our contact channels, and we will guide you through the
                        process. We offer:
                      </p>
                      <ul>
                        <li>
                          <i className="far fa-check"></i> Initial Consultation
                          and Needs Assessment
                        </li>
                        <li>
                          <i className="far fa-check"></i> Customized Service
                          Proposal
                        </li>
                        <li>
                          <i className="far fa-check"></i> Dedicated Support
                          Throughout Your Journey
                        </li>
                      </ul>
                    </div>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
