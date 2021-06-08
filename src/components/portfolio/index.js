import React from "react";
import GridPortfolio from "../GridPortfolio";
import { Grid, Container } from "@material-ui/core";

import NavMenu from "../menu";
import "../../styles/portfolio.scss";

import Back from "../Back";
function Portfolio({ portfolioData }) {
  return (
    <div className="portfolio">
      <p className="portfolio-header">Portfolio</p>
      <Container>
        <Grid container spacing={2}>
          {portfolioData.map((tile) => (
            <GridPortfolio tile={tile} />
          ))}
        </Grid>
      </Container>
      <NavMenu />
      <Back />
    </div>
  );
}
export default Portfolio;
