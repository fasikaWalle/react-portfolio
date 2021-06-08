import React from "react";
import { Grid } from "@material-ui/core";

import { ImGithub } from "react-icons/im";
function GridPortfolio({ tile }) {
  return (
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
  );
}

export default GridPortfolio;
