import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";

import omni from "../../assets/Omnifood.png";
import zing from "../../assets/zing.png";
import simpleJack from "../../assets/simple-jack.png";
import blog from "../../assets/blog_post.png";
import Menu from "../menu";
import NavMenu from "../menu";
import "../../styles/portfolio.scss";

import { ImGithub } from "react-icons/im";
import Footer from "../footer";
const tileData = [
  {
    id: "0",
    md: 6,

    title: "Simple Jack",
    src: simpleJack,
    tool: "Javascript",
    url: "https://jamesluu96.github.io/simple-jack/",
  },
  {
    id: "1",
    cols: 4,

    src: omni,
    title: "Omni foods",
    tool: "HTML & CSS",
    url: "https://fasikawalle.github.io/omniFood/",
  },

  {
    id: "2",
    md: 4,

    title: "Zing",
    src: zing,
    tool: "Node",
    url: "https://zing-chat.herokuapp.com/login",
  },
  {
    id: "3",
    md: 3,

    title: "Blog Post",
    src: blog,
    tool: "Node",
    url: "https://tech-blog-post.herokuapp.com/",
  },
];

// // const useStyles = makeStyles({
// //   root: {
// //     maxWidth: 300,
// //   },
// //   media: {
// //     height: "200px",
// //     margin: "20px",
// //   },
// // });

export default function ImageGridList() {
  return (
    <div className="portfolio">
      <p className="portfolio-header">Portfolio</p>
      <Container>
        <Grid container spacing={2}>
          {tileData.map((tile) => (
            <Grid key={tile.id} item xs={12} sm={6} md={4}>
              <div className="work-grid">
                <a href={tile.url}>
                  <img src={tile.src} alt={tile.title} className="work-image" />
                </a>
                <div className="work-title">
                  <p className="title">
                    <>
                      <a href="#">{tile.title}</a>
                      <ImGithub />
                    </>
                    {tile.tool}
                  </p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <NavMenu />
      <Footer />
    </div>
  );
}
