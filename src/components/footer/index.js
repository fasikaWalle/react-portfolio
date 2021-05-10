import React from "react";

import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import "../../styles/footer.scss";

function Footer() {
  return (
    <div className="footer">
      <AiOutlineMail
        className="icons"
        onClick={() => window.open("mailto:fasikawalle8@gmail.com")}
      />

      <AiFillLinkedin
        className="icons"
        onClick={() =>
          window.open("https://www.linkedin.com/in/fasika-walle-701bb1143/")
        }
      />

      <AiFillGithub
        className="icons"
        onClick={() => window.open("https://github.com/fasikaWalle/")}
      />
    </div>
  );
}
export default Footer;
