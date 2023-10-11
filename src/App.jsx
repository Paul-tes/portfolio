import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import { About } from "./components/About";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <SocialLinks />
    </>
  );
}

export default App;
