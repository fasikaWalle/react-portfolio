import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import profilePicture from "../../assets/fasika2.png";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  aboutMeContainer: {
    marginTop: "4rem",
    marginLeft: "4rem", //remove it when it is in media query
  },
  aboutMeParagraph: {
    fontSize: "1.2rem",
    textAlign: "justify",
    fontWeight: "",
    marginTop: "-0.5rem",
  },
  profilePicture: {
    width: "70%",
    marginTop: "1rem",
    borderRadius: "20px",
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={10} className={classes.aboutMeContainer}>
        <Grid item xs={12} sm={4}>
          <img
            src={profilePicture}
            alt="profile"
            className={classes.profilePicture}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <p className={classes.aboutMeParagraph}>
            Full Stack developer with more than 3 years of experience developing
            enterprise web applications for diverse crime investigation bureau.
            Advanced experience in front end technologies like reactjs and
            Typescript plus the accompanying automated testing frameworks like
            jest. Experience in Java implementing the most suitable data
            structures, design patterns to efficiently solve software
            development problems.Experienced working effectively in
            multicultural teams developing software using different SDLC
            methodologies such as Agile/SCRUM and Prototype. Detail oriented,
            with high ability to learn new technologies in a short time.
          </p>
        </Grid>
      </Grid>
      {/* <GitHubIcon />
      <LinkedInIcon /> */}
    </div>
  );
}
