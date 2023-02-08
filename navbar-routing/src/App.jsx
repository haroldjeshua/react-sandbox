import { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {
  // console.log(window.location);
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/work":
      component = <Work />;
      break;
    case "/about":
      component = <About />;
      break;
    case "/contact":
      component = <Contact />;
      break;
  }
  return (
    <>
      <Navbar />
      <div className="container">{component}</div>
    </>
  );
}

export default App;
