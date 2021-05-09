import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";

import omni from "../../assets/Omnifood.png";
import zing from "../../assets/zing.png";
import simpleJack from "../../assets/simple-jack.png";
import blog from "../../assets/blog_post.png";
import profilePic from "../../assets/images/fasika.jpg";
import NavMenu from "../menu";

import Footer from "../footer";
import { FaPhoneSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import "../../styles/resume.scss";
const tileData = [
  {
    id: "0",
    md: 6,

    title: "Simple Jack",
    src: simpleJack,
    tool: "Javascript",
    url: "https://jamesluu96.github.io/simple-jack/",
  },

  {
    id: "1",
    cols: 4,

    src: omni,
    title: "Omni foods",
    tool: "HTML & CSS",
    url: "https://fasikawalle.github.io/omniFood/",
  },

  {
    id: "2",
    cols: 4,

    src: omni,
    title: "Omni foods",
    tool: "HTML & CSS",
    url: "https://fasikawalle.github.io/omniFood/",
  },
  {
    id: "3",
    cols: 4,

    src: omni,
    title: "Omni foods",
    tool: "HTML & CSS",
    url: "https://fasikawalle.github.io/omniFood/",
  },
  {
    id: "4",
    md: 4,

    title: "Zing",
    src: zing,
    tool: "Node",
    url: "https://zing-chat.herokuapp.com/login",
  },
  {
    id: "5",
    md: 3,

    title: "Blog Post",
    src: blog,
    tool: "Node",
    url: "https://tech-blog-post.herokuapp.com/",
  },
];

export default function Resume() {
  return (
    <div className="resume">
      <h1 className="resume-header">Resume</h1>
      {/* <Container>
        <Grid container spacing={2}>
          {tileData.map((tile) => (
            <Grid key={tile.id} item xs={12} sm={6} md={4}>
              <div className="work-grid">
                <div>
                  <FaJava />
                  {/* 
                  <i class="fab fa-js-square"></i> */}
      {/* </div>
                <h3>React</h3>
                List skills/technologies here. You can change the icon above to
                any of the 1500+ FontAwesome 5 free icons available. Aenean
                commodo ligula eget dolor.
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <NavMenu /> */}
      {/* <Footer /> */}
      <div className="info">
        <div>
          <h2 className="header-name color">Fasika Walle</h2>
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
        <img src={profilePic} className="profile-pic" />
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
          <h2 className="color">Work experiances</h2>
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
          <h2 className="color">Skills</h2>
          <ul>
            <li>JavaScript/React/</li>
            <li>Node.js</li>
            <li>Object-oriented design</li>
            <li>database structures</li>
            <li>Java</li>
          </ul>
          <div>
            <h3 className="color">Education</h3>
            <h4>MSc in Computer Science</h4>
            Dire Dawa,Ethiopia university 2011 - 2015
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>

      <NavMenu />
    </div>
  );
}
