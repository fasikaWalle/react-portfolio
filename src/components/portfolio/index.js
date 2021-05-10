import React from "react";

import { Grid, Container } from "@material-ui/core";

import NavMenu from "../menu";
import "../../styles/portfolio.scss";

import { ImGithub } from "react-icons/im";
import Back from "../Back";
function Portfolio({ portfolioData }) {
  return (
    <div className="portfolio">
      <p className="portfolio-header">Portfolio</p>
      <Container>
        <Grid container spacing={2}>
          {portfolioData.map((tile) => (
            <Grid key={tile.id} item xs={12} sm={6} md={4}>
              <div className="work-grid">
                <a href={tile.git}>
                  <img src={tile.src} alt={tile.title} className="work-image" />
                </a>
                <div className="work-title">
                  <p className="title">
                    <>
                      {tile.title}
                      <ImGithub className="git-icon" />
                    </>
                    <span> {tile.tool}</span>
                  </p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <NavMenu />
      <Back />
    </div>
  );
}
export default Portfolio;
