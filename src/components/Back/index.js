import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "../../styles/back.scss";
import { Link } from "react-router-dom";
function Back() {
  return (
    <div>
      <Link to="/">
        <AiOutlineArrowLeft className="back-home" />
      </Link>
    </div>
  );
}

export default Back;
