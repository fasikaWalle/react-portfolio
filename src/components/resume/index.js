import React from "react";

import profilePic from "../../assets/images/fasika.jpg";
import NavMenu from "../menu";

import { FaPhoneSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { GrDocumentWord } from "react-icons/gr";
import Back from "../Back";
import "../../styles/resume.scss";
import resume from "../../assets/doc/FasikaWalleResume.docx";
export default function Resume() {
  return (
    <div className="resume">
      <h1 className="resume-header">Resume</h1>

      <div className="info">
        <div>
          <h2 className="header-name">Fasika Walle</h2>
          <div className="header-title">Software Developer</div>
        </div>
        <div className="contact-info">
          <ul>
            <li>
              <FaPhoneSquare /> 512 289 0097
            </li>
            <li>
              <AiOutlineMail /> fasikaWalle8@gmail.com
            </li>

            <li>
              {" "}
              <ImLocation2 />
              Austin,Texas
            </li>
          </ul>
        </div>
      </div>
      <div className="resume-aboutme">
        <img src={profilePic} className="profile-pic" alt="profile-pic" />
        <p>
          nt of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions
        </p>
      </div>
      <div className="skills-section">
        <div className="work">
          <h2>
            <span className="color"></span>Work experiances
          </h2>
          <div>
            <h4>Software developer</h4>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English
          </div>
          <div>
            <h4>Software developer</h4>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English
          </div>
        </div>
        <div className="skills ">
          <h2>
            <span className="color"></span>Skills
          </h2>
          <ul>
            <li>JavaScript/React/</li>
            <li>Node.js</li>
            <li>Object-oriented design</li>
            <li>database structures</li>
            <li>Java</li>
          </ul>
          <div>
            <h3>
              <span className="color"></span>Education
            </h3>
            <h4>MSc in Computer Science</h4>
            Dire Dawa,Ethiopia university 2011 - 2015
          </div>
        </div>
      </div>

      <NavMenu />
      <Back />

      <a href={resume} download="resume" className="download-resume">
        <GrDocumentWord className="word-icon" /> download
      </a>
    </div>
  );
}
