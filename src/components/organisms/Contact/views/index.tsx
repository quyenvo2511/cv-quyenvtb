import * as React from "react";
import ContactSection from "./styles";
import SocialLinks from "../../../molecules/SocialLinks";
import HeaderSection from "../../../molecules/HeaderSection";

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact-us" data-wow-offset="40">
      <HeaderSection>CONTACT</HeaderSection>
      <div className="row">
        <div className="col-sm-12">
          <div className="info-content">
            <h3>KEEP IN TOUCH</h3>
            <div className="address">
              <span className="info-icon">
                <i className="fa fa-map-marker"></i>
              </span>
              <span className="info-text">Hồ Chí Minh</span>
            </div>
            <div className="email">
              <span className="info-icon">
                <i className="fa fa-envelope"></i>
              </span>
              <span className="info-text">ljulyvo@gmail.com</span>
            </div>
            <div className="telephone">
              <span className="info-icon">
                <i className="fa fa-phone"></i>
              </span>
              <span className="info-text">+84916382356</span>
            </div>
            <div className="website">
              <span className="info-icon">
                <i className="fa fa-link"></i>
              </span>
              <span className="info-text">
                http://quyenvtb.github.io/cv-quyenvtb
              </span>
            </div>
          </div>
        </div>
      </div>
      <SocialLinks />
    </ContactSection>
  );
};

export default Contact;
