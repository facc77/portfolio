import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { Parallax } from "./components/Parallax";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Banner />
        <Parallax />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <ToastContainer />
      </div>
    </>

  );
}

export default App;
