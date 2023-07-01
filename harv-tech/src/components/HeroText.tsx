import { motion } from "framer-motion";
import Asterisk from "../assets/Asterisk";
import { animationStart, reveal } from "../utils/animation";

export default function HeroText() {
  return (
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="flex flex-col text-4vw <md:text-24px font-bold mb-32px pt-100px"
      >
        <span className="flex items-center gap-12px">
          Leading <Asterisk /> industry's
        </span>
        <span>next tech leaders</span>
      </motion.div>
      <motion.span
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1.2, duration: 0.5 }}
        className="mb-32px w-1/4 <lg:w-1/3 <md:w-1/2 text 16px leading-tight"
      >
        Discover personalized resources, expert guidance, and a supportive
        community to help you thrive and succeed. Harness your talents, pursue
        your passions, and become the best version of yourself with Harv.
      </motion.span>
    </motion.div>
  );
}
