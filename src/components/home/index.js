import { React, useEffect, useState } from "react";
import Particles from "react-particles-js";

import "../../styles/home.scss";
import NavMenu from "../menu";

function Home() {
  const [navState, setNavState] = useState(false);
  // useEffect(() => {
  //   console.log(navState + " " + "update");

  // }, [navState]);
  // useEffect(() => {
  //   console.log("mount");
  // }, []);
  //component did update
  //component will unmount
  //componentDidMount
  return (
    <>
      <div className="headerText">
        Hello, I'm Fasika Walle
        <p className="spanHeader">I am a full stack developer</p>
      </div>

      <NavMenu />
      <Particles
        className="particleCanvas"
        params={{
          particles: {
            number: { value: 100 },
            density: {
              enable: true,
              value_area: 900,
            },
            anim: { enable: true, speed: 10 },
            onclick: {
              enable: true,
              mode: "push",
              resize: true,
            },

            color: {
              value: "#000000",
            },
            line_linked: {
              shadow: {
                enable: true,
                color: "#333",
                blur: 5,
                distance: 150,
              },
            },
          },
        }}
      />
    </>
  );
}

export default Home;
