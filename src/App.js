import React from "react";
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Infoes from "./components/infoes/Infoes";
import Portfolio from "./components/portfolio/Portfolio";
import Register from "./components/register/Register";
import Topbar from "./components/topbar/Topbar";

export default function App() {
  return (
    <div>
      <Topbar />
      <Banner />
      <Portfolio />
      <About />
      <Register />
      <Infoes />
      <Footer />
    </div>
  );
}
