import { useEffect, useRef, useState } from "react";
import "./App.scss";

function App() {
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

  const [current, setCurrent] = useState(0);
  const slideRef = useRef(null);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      "--x",
      event.clientX - (r.left + Math.floor(r.width / 2))
    );
    el.style.setProperty(
      "--y",
      event.clientY - (r.top + Math.floor(r.height / 2))
    );
  };

  const handleMouseLeave = () => {
    slideRef.current.style.setProperty("--x", 0);
    slideRef.current.style.setProperty("--y", 0);
  };

  const handleSlideClick = (index) => {
    setCurrent(index);
  };

  const handlePreviousClick = () => {
    setCurrent(current - 1);
  };

  const handleNextClick = () => {
    setCurrent(current + 1);
  };

  const imageLoaded = (event) => {
    event.target.style.opacity = 1;
  };

  const Slide = ({ slide }) => {
    const { src, button, headline, index } = slide;
    let classNames = "slide";

    if (current === index) classNames += " slide--current";
    else if (current - 1 === index) classNames += " slide--previous";
    else if (current + 1 === index) classNames += " slide--next";
  };

  const SliderControl = ({ type, title, handleClick }) => {
    return (
      <button
        className={`btn btn--${type}`}
        title={title}
        onClick={handleClick}
      >
        <svg className="icon" viewBox="0 0 24 24">
          <title>{title}</title>
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </button>
    );
  };

  return (
    <div className="App">
      <div className="slider">
        <ul className="slider__wrapper">
          {slideData.map((slide) => (
            <Slide key={slide.index} slide={slide} current={current} />
          ))}
        </ul>
        <div className="slider__controls">
          <SliderControl
            type="previous"
            title="Go to previous slide"
            handleClick={handlePreviousClick}
          />
          <SliderControl
            type="next"
            title="Go to next slide"
            handleClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
