import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./App.scss";

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
  const slideRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = e.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty("--x", e.clientX - r.left + Math.floor(r.width / 2));
    el.style.setProperty("--y", e.clientY - r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = (e) => {
    e.current.style.setProperty("--x", 0);
    e.current.style.setProperty("--y", 0);
  };

  const imageLoaded = (e) => {
    e.target.style.opacity = 1;
  };

  useEffect(() => {
    slideRef.current.addEventListener("mousemove", handleMouseMove);
    slideRef.current.addEventListener("mouseleave", handleMouseLeave);
    slideRef.current.addEventListener("click", handleSlideClick);

    return () => {
      slide.current.removeEventListener("mousemove", handleMouseMove);
      slide.current.removeEventListener("mouseleave", handleMouseLeave);
      slide.current.removeEventListener("click", handleSlideClick);
    };
  }, [handleSlideClick, slide.index]);

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

const SliderControl = ({ type, title, handleClick }) => {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  );
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideClick = (index) => setCurrentSlide(index);

  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
