import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./style.module.css";
import { useLayoutEffect, useRef } from "react";

export default function Description() {
  const phrases = [
    "Breathe in the fresh air.",
    "Listen to the sounds of nature.",
    "Feel the warmth of the sunlight.",
    "Explore the beauty of the wilderness.",
    "Find peace in the embrace of nature.",
  ];

  return (
    <div className={styles.description}>
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
}

function AnimatedText({ children }) {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "0px bottom",
        end: "bottom+=300px bottom",
        scrub: true,
      },
      opacity: 0,
      left: "-50px",
      ease: "power3.Out",
    });
  }, []);

  return <p ref={text}>{children}</p>;
}
