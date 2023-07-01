import { motion } from "framer-motion";
import {
  animationStart,
  decorRevealLeft,
  decorRevealRight,
} from "../utils/animation";

export default function MapImages() {
  return (
    <div className="absolute w-full flex justify-between transform -translate-y-200px -z-1 overflow-hidden">
      <motion.img
        variants={decorRevealRight}
        initial="hiddenDecor"
        animate="revealedDecor"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        src="src/assets/decor-1.svg"
        alt="decoration 1"
      />
      <motion.img
        variants={decorRevealLeft}
        initial="hiddenDecor"
        animate="revealedDecor"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        src="src/assets/decor-2.svg"
        alt="decoration 2"
      />
    </div>
  );
}
