import * as React from "react";
import EducationSection from "./styles";
import HeaderSection from "../../../molecules/HeaderSection";

const Education: React.FC = () => {
  return (
    <EducationSection id="education" data-wow-offset="40">
      <HeaderSection>EDUCATION</HeaderSection>
      <div className="row">
        <div className="col-sm-6">
          <div className="education-content">
            <div className="period">
              <h3>Aug 2013 - Jan 2018 </h3>
            </div>
            <ul className="ul-education">
              <li className="li-specialty">
                <div className="specialty">
                  <span className="education-icon">
                    <i className="fa fa-file-text"></i>
                  </span>
                  <span className="specialty-name">Student</span>
                </div>
              </li>
              <li className="li-university">
                <div className="university">
                  <span className="education-icon">
                    <i className="fa fa-building"></i>
                  </span>
                  <span className="university-name">
                    University Of Science - Vietnam National University
                  </span>
                </div>
              </li>
            </ul>
            <p className="prg-education">
              I have been a student in HCMUS - VNU.
            </p>
          </div>
        </div>

        <div className="clearfix"></div>
      </div>
    </EducationSection>
  );
};

export default Education;
