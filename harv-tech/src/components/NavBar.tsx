import { motion } from "framer-motion";
import { animationStart, reveal } from "../utils/animation";
import ArrowRight from "../assets/ArrowRight";
import Logo from "../assets/Logo";

const NavBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: animationStart }}
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{
          ease: "easeIn",
          type: "tween",
          staggerChildren: 0.1,
          duration: 0.5,
          delayChildren: animationStart + 0.5,
        }}
        className="w-full flex items-center justify-around h-80px fixed top-0 bg-white z-100"
      >
        <motion.div variants={reveal}>
          <Logo />
        </motion.div>
        <div className="flex gap-32px items-center <md:hidden">
          <motion.span variants={reveal} className="cursor-pointer">
            Solutions
          </motion.span>
          <motion.span variants={reveal} className="cursor-pointer">
            Services
          </motion.span>
          <motion.span variants={reveal} className="cursor-pointer">
            About
          </motion.span>
          <motion.span variants={reveal} className="cursor-pointer">
            Resources
          </motion.span>
        </div>
        <div className="flex gap-8px items-center cursor-pointer">
          <span className="mb-4px">Sign in</span>
          <ArrowRight />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NavBar;
