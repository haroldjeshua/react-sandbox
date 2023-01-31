import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <motion.div className="card">
        <motion.h2>Framer Motion 🚀</motion.h2>
        <motion.div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            praesentium quos perferendis nesciunt aspernatur aliquid natus ex
            magnam!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
