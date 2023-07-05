import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./style.module.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);
  const projects = [
    {
      title: "Lake Verdoom",
      src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
    {
      title: "Shifa Sharmoon",
      src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80",
    },
    {
      title: "Telluride Waterfall",
      src: "https://images.unsplash.com/photo-1455218873509-8097305ee378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
    {
      title: "Vasconez Sunset",
      src: "https://images.unsplash.com/photo-1497449493050-aad1e7cad165?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80",
    },
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      pin: true,
      start: "top-=100px",
      end: document.body.offsetHeight - window.innerHeight - 50,
    });
  }, []);

  return (
    <div ref={container} className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image
            src={`${projects[selectedProject].src}`}
            fill={true}
            alt="project image"
            priority={true}
          />
        </div>
        <div className={styles.column}>
          <p>
            Harv Projects is a pioneering initiative that brings together the
            power of technology and the wonders of nature. Through innovative
            solutions and sustainable practices, we strive to create a
            harmonious balance between human progress and the preservation of
            our natural world.
          </p>
        </div>
        <div className={styles.column}>
          <p>
            At Harv Projects, we believe in the transformative potential of
            nature-inspired technologies. Our dedicated team of scientists,
            engineers, and visionaries work tirelessly to develop groundbreaking
            solutions that are inspired by the intricate patterns and resilience
            found in nature. From renewable energy systems to eco-friendly
            materials, our projects aim to minimize environmental impact while
            maximizing the benefits for society.
          </p>
        </div>
      </div>

      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseOver={() => {
              setSelectedProject(index);
            }}
            className={styles.projectEl}
          >
            <h2>{project.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
