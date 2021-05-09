import { React, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Nav from "../nav";
import "../../styles/menu.scss";
function NavMenu() {
  const [navState, setNavState] = useState(false);
  return (
    <div>
      <MenuIcon className="menuIcon" onClick={() => setNavState(!navState)} />
      {navState ? <Nav /> : null}
    </div>
  );
}

export default NavMenu;
