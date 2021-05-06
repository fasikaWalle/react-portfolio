import React from "react";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  particleCanvas: {
    position: "fixed !important",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Particles
      className={classes.particleCanvas}
      params={{
        particles: {
          number: { value: 45 },
          density: {
            enable: true,
            value_area: 900,
          },
          anim: { enable: true, speed: 10 },
          color: {
            value: "#fff",
          },
          line_linked: {
            shadow: {
              enable: true,
              color: "#333",
              blur: 5,
            },
          },
        },
      }}
    />
  );
}

export default Home;
