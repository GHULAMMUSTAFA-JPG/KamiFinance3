import React from "react";
import ContactForm from "../ContactFrom/ContactForm";
import shape from "/public/images/icon/n_pad.svg";
import Image from "next/image";

const ContactSection = (props) => {
  return (
    <section className="contact contact-pt gray-bg">
      <div className="container">
        <div className="xb-contact pos-rel">
          <div className="row">
            <div className="col-lg-6">
              <div className="xb-item--inner">
                <div className="xb-item--holder mb-25">
                  <span>
                    <Image src={shape} alt="" />
                    Contact Us
                  </span>
                  <h3>
                    Do you have questions or went more <br /> information?
                  </h3>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7210.613812472799!2d54.375856099999995!3d24.453884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6675445dc935%3A0xe2e5a6d60d16d19d!2sAbu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1592852423971!5m2!1sen!2sbd"
              //   width="600"
              //   height="450"
              //   style="border:0;"
              //   allowfullscreen=""
              //   loading="lazy"
            ></iframe>

            {/* <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.254272231177!2d90.3654215!3d23.7985508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1592852423971!5m2!1sen!2sbd"></iframe> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
