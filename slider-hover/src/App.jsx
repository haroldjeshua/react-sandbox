import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./App.css";

const slideData = [
  {
    index: 0,
    headline: "New Fashion Apparel",
    button: "Shop now",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
  },
  {
    index: 1,
    headline: "In The Wilderness",
    button: "Book travel",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
  },
  {
    index: 2,
    headline: "For Your Current Mood",
    button: "Listen",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
  },
  {
    index: 3,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  },
];

const Slide = ({ slide, current, handleSlideClick }) => {
  const handleMouseMove = (e) => {
    const el = slide.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty("--x", e.clientX - r.left + Math.floor(r.width / 2));
    el.style.setProperty("--y", e.clientY - r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = (e) => {
    slide.current.style.setProperty("--x", 0);
    slide.current.style.setProperty("--y", 0);
  };

  const slide = useRef(null);

  useEffect(() => {
    slide.current.addEventListener("mousemove", handleMouseMove);
    slide.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      slide.current.removeEventListener("mousemove", handleMouseMove);
      slide.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const { src, button, headline, index } = slide;
  let classNames = "slide";

  if (current === index) classNames += " slide--current";
  else if (current - 1 === index) classNames += " slide--previous";
  else if (current + 1 === index) classNames += " slide--next";

  return (
    <li
      ref={slide}
      className={classNames}
      onClick={() => handleSlideClick(index)}
    >
      <div className="slide__image-wrapper">
        <img src={src} alt="headline" className="slide__image" />
      </div>

      <article className="slide__content">
        <h2 className="slide__headline">{headline}</h2>
        <button className="slide__action btn">{button}</button>
      </article>
    </li>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
