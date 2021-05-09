import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import { BottomNavigationAction } from "@material-ui/core";
import "../../styles/footer.scss";

function Footer() {
  return (
    <div className="footer">
      <BottomNavigationAction icon={<MailIcon className="icons" />} />
      <BottomNavigationAction icon={<LinkedInIcon className="icons" />} />
      <BottomNavigationAction icon={<GitHubIcon className="icons" />} />
    </div>
  );
}
export default Footer;
