import Header from "./components/Home/Header";
import ProfComponent from "./components/Home/ProfComponent";
import AboutMe from "./components/AboutMe";  
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Services from "./components/Services";
import MyCanvas from "./components/Home/MyCanvas"
import "./App.css";

function App() {
  return (
    <div className="container">
      <MyCanvas/>
      <div className="banner">
        <Header />
        <ProfComponent />
      </div>
      <Services />
      <div className="lightColor">
        <Projects />
      </div>
      <AboutMe />
      <div className="lightColor">
        <Footer />
      </div>
    </div>
  );
}

export default App;