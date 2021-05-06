import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navBar: {
    backroundColor: "none",
    fontSize: "1.1rem",
    color: "#ff41a0",
  },
}));
export default function Nav() {
  const classes = useStyles();
  return (
    <div className={classes.navBar}>
      <Box display="flex" flexDirection="row" p={1} m={1}>
        <Box p={2}>About me</Box>
        <Box p={2}>Portfolio</Box>
        <Box p={2}>Contact</Box>
        <Box p={2}>Resume</Box>
      </Box>
    </div>
  );
}
