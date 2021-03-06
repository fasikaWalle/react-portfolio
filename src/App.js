import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/home";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import zingNew from "../src/assets/images/zing2.0.png";
import zing from "../src/assets/images/zing.png";
import simpleJack from "../src/assets/images//simple-jack.png";
import blog from "../src/assets/images/blog_post.png";

const portfolioData = [
  {
    id: "0",
    md: 6,
    title: "Simple Jack",
    src: simpleJack,
    tool: "Javascript",
    git: "https://github.com/JamesLuu96/simple-jack",
  },
  {
    id: "1",
    cols: 4,

    src: zingNew,
    title: "Zing Chat 2.0",
    tool: "React",
    git: "https://github.com/JamesLuu96/zing-chat",
  },

  {
    id: "2",
    md: 4,
    title: "Zing",
    src: zing,
    tool: "Node",
    git: "https://github.com/JamesLuu96/zing",
  },
  {
    id: "3",
    md: 3,
    title: "Blog Post",
    src: blog,
    tool: "Node",
    git: "https://github.com/fasikaWalle/tech-blog-post",
  },
];
//app comonent
function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route
              path="/portfolio"
              render={(props) => (
                <Portfolio {...props} portfolioData={portfolioData} />
              )}
            />
            <Route path="/resume" component={Resume} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
