import { React, useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Nav from "../nav";
import "../../styles/menu.scss";
function NavMenu() {
  const [navState, setNavState] = useState(false);
  return (
    <div>
      <AiOutlineMenuUnfold
        className="menuIcon"
        onClick={() => setNavState(!navState)}
      />
      {navState ? <Nav /> : null}
    </div>
  );
}

export default NavMenu;
