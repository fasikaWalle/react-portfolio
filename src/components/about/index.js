import React from "react";

import Footer from "../footer";
import NavMenu from "../menu";
import "../../styles/about.scss";
export default function About() {
  return (
    <div className="aboutme-wrapper">
      <div className="about-me">
        <h1 className="aboutme-header">About Me</h1>
        Full Stack developer with more than 3 years of experience developing
        enterprise web applications for diverse crime investigation bureau.
        Advanced experience in front end technologies like reactjs and
        Typescript plus the accompanying automated testing frameworks like jest.
        Experience in Java implementing the most suitable data structures,
        design patterns to efficiently solve software development
        problems.Experienced working effectively in multicultural teams
        developing software using different SDLC methodologies such as
        Agile/SCRUM and Prototype. Detail oriented, with high ability to learn
        new technologies in a short time.
      </div>
      <NavMenu />
      <Footer />
    </div>
  );
}
