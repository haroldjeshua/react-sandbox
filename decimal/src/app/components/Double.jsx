"use client";
import Image from "next/image";
import { useRef } from "react";
import styles from "./style.module.scss";

export default function Double({ projects, reversed }) {
  const oddImage = useRef(null);
  const evenImage = useRef(null);

  let requestAnimationFrameId = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100: 0;

  const speed = 0.15;

  const animate = () => {
    // Add easing in animation
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent = currentXPercent + (xPercentDelta * speed);

    // Change width of the images between 66.66% and 33.33% based on cursor position
    const oddImagePercent = 66.66 - (currentXPercent * 0.33);
    const evenImagePercent = 33.33 + (currentXPercent * 0.33);
    console.log(evenImagePercent);

    oddImage.current.style.width = `${oddImagePercent}%`;
    evenImage.current.style.width = `${evenImagePercent}%`;
  }

  return (
    <section className={styles.double}>
      <div className={styles.imageContainer} ref={oddImage}>
        <div className={styles.stretchyContainer}>
          <Image fill={true} alt={"image"} src={projects[0].src} />
        </div>
        <div className={styles.body}>
          <h3>{projects[0].name}</h3>
          <p>{projects[0].desc}</p>
          <p>{projects[0].year}</p>
        </div>
      </div>

      <div className={styles.imageContainer} ref={evenImage}>
        <div className={styles.stretchyContainer}>
          <Image fill={true} alt={"image"} src={projects[1].src} />
        </div>
        <div className={styles.body}>
          <h3>{projects[1].name}</h3>
          <p>{projects[1].desc}</p>
          <p>{projects[1].year}</p>
        </div>
      </div>
    </section>
  );
}
