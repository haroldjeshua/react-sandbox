import Image from "next/image";
import styles from "./style.module.css";

export default function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.backgroundImage}>
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          fill={true}
          alt="landscapes"
        />
      </div>

      <div className={styles.intro}>
        <div className={styles.introImage}>
          <Image
            src="https://images.unsplash.com/photo-1512641406448-6574e777bec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            fill={true}
            alt="intro image"
          />
        </div>
        <h1>Smooth Scroll</h1>
      </div>
    </div>
  );
}
