import "./App.css";
import About from "./components/about";

import Footer from "./components/footer";

import Home from "./components/home";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const ProfileInfo = {
  name: "Fasika Walle",
  email: "fasikabini12@gmail.com",
  linkdin: "",
};

function App() {
  const descrition = {
    name: "Hello, I'm Fasika Walle",
    description: "I am a full stack developer",
  };
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} />

          <Footer />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
