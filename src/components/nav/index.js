import { React } from "react";
import Box from "@material-ui/core/Box";
import "../../styles/nav.scss";
import faikaWalle from "../../assets/images/fasika.jpg";

import { Link } from "react-router-dom";
export default function Nav() {
  const navBar = ["About", "Contact", "Resume", "Portfolio"];

  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        p={1}
        m={1}
        className="nav-menu"
      >
        <img src={faikaWalle} className="profile-image" href="/" alt="cover" />
        {navBar.map((navListItem) => (
          <Box p={2} key={navListItem}>
            <Link to={"/" + navListItem.toLowerCase()} className="navList">
              {navListItem}
            </Link>
          </Box>
        ))}
      </Box>
    </div>
  );
}
