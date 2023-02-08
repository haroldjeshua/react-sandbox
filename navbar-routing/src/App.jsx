import { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Work from "./pages/Work";
import { Route, Routes } from "react-router-dom";

function App() {
  // console.log(window.location);
  let component;
  // native routing with RRD
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <Home />;
  //     break;
  //   case "/work":
  //     component = <Work />;
  //     break;
  //   case "/about":
  //     component = <About />;
  //     break;
  //   case "/contact":
  //     component = <Contact />;
  //     break;
  // }
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
