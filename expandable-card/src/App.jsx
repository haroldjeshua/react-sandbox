import { useState } from "react";
import { motion, spring } from "framer-motion";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <motion.div
        className="card"
        layout
        transition={{ layout: { duration: 0.75, type: "spring" } }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.h2 layout="position">Framer Motion 🚀</motion.h2>
        {isOpen && (
          <motion.div className="text-content">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus praesentium quos perferendis nesciunt aspernatur aliquid
              natus ex magnam!
            </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <button>Learn More</button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
