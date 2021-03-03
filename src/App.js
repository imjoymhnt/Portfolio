import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header
      image="https://bit.ly/3bZOwaC"
      title="Mritunjoy Mahanta"
      description="Full Stack Web Developer"
    />
    <Portfolio />
    <About />
    <Contact />
    <Footer />
  </div>
);

export default App;
