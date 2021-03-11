import React  from "react";
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import About from "./pages/About/About"
import Skills from "./pages/Skills/Skills";
import Experiences from "./pages/Experiences/Experiences";
import Portfolio from "./pages/Portfolio/Portfolio"
import Blog from "./pages/Blog/Blog";
import Footer from "./pages/Footer/Footer";
import Testimonials from "./pages/Testimonials/Testimonials";







function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Experiences/>
        <Portfolio/>
        <Testimonials/>
        <Blog/>
        <Footer/>

        
    </div>
  );
}

export default App;
