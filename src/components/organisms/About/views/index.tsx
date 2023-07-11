import * as React from "react";
import AboutSection from "./styles";

const About = () => {
  return (
    <AboutSection id="about">
      <div className="profile">
        <div className="row">
          <div className="col-sm-4">
            <div className="photo-profile">
              <img
                src={process.env.PUBLIC_URL + "/images/me.png"}
                alt="Võ Trịnh Bội Quyên"
              />
            </div>
            {/* <a
              href={
                "https://docs.google.com/document/d/1-OuVMRUYSfIHr0aP8egz8kU5ctbImbg1/edit?usp=sharing&ouid=109415242026217357542&rtpof=true&sd=true"
              }
              target="cv"
            >
              <div className="download-resume">
                <i className="fa fa-cloud-download" aria-hidden="true"></i>
                <span className="text-download">DOWNLOAD CV</span>
              </div>
            </a> */}
          </div>
          <div className="col-sm-8">
            <div className="info-profile">
              <h2>
                <span>HI I'M</span> Võ Trịnh Bội Quyên
              </h2>
              <h3>Fullstack developer</h3>
              <p>
                Hello! I’m Võ Trịnh Bội Quyên. I have 3+ year experience in
                ReactJS.
              </p>
              <div className="row">
                <div className="col-sm-6">
                  <ul className="ul-info">
                    <li className="li-info">
                      <span className="title-info">Age</span>
                      <span className="info">26</span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Address</span>
                      <span className="info">Hồ Chí Minh</span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Email</span>
                      <span className="info">ljulyvo@gmail.com</span>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="ul-info">
                    <li className="li-info">
                      <span className="title-info">Phone</span>
                      <span className="info">+84916382356</span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Website</span>
                      <span className="info">
                        https://github.com/quyenvo2511
                      </span>
                    </li>
                    <li className="li-info">
                      <span className="title-info">Nationality</span>
                      <span className="info">Viet Nam</span>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12">
                  <span className="title-links">Social Links</span>
                  <ul className="ul-social-links">
                    {/* <li className="li-social-links">
                      <a
                        href="# "
                        data-tootik="Twitter"
                        data-tootik-conf="square"
                      >
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li> */}
                    <li className="li-social-links">
                      <a
                        href="# "
                        data-tootik="Google Plus"
                        data-tootik-conf="square"
                      >
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    {/* <li className="li-social-links">
                      <a
                        href="# "
                        data-tootik="Linkedin"
                        data-tootik-conf="square"
                      >
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li> */}
                    {/* <li className="li-social-links">
                      <a
                        href="# "
                        data-tootik="Pinterest"
                        data-tootik-conf="square"
                      >
                        <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutSection>
  );
};

export default About;
