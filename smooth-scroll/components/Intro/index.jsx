"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Intro() {
  const backgroundImage = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500px",
        scrub: true,
        markers: true,
      },
    });

    timeline
      .from(backgroundImage.current, { clipPath: `inset(16%)` })
      .to(introImage.current, { height: "200px" }, 0);
  }, []);

  return (
    <div className={styles.intro}>
      <div ref={backgroundImage} className={styles.backgroundImage}>
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          fill={true}
          alt="landscapes"
        />
      </div>

      <div className={styles.intro}>
        <div
          ref={introImage}
          className={styles.introImage}
          data-scroll
          data-scroll-speed="0.3"
        >
          <Image
            src="https://images.unsplash.com/photo-1512641406448-6574e777bec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            fill={true}
            alt="intro image"
          />
        </div>
        <div className={styles.introText} data-scroll data-scroll-speed="0.5">
          <h1>Harv Scroll</h1>
          <p>React Sandbox: Smooth Scroll w/ GSAP + Locomotive Scroll</p>
        </div>
      </div>
    </div>
  );
}
