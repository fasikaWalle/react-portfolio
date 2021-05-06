import "./App.css";
import About from "./components/about";
import Nav from "./components/nav";
import Home from "./components/particles";
const ProfileInfo = {
  name: "Fasika Walle",
  email: "fasikabini12@gmail.com",
  linkdin: "",
};
function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <About ProfileInfo={ProfileInfo} />
    </div>
  );
}

export default App;
