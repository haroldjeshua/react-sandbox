import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";
import "./App.css";

import Home from "./routes/Home";
import Work from "./routes/Work";
import About from "./routes/About";
import Contact from "./routes/Contact";

function App() {
  return (
    <BrowserRouter>
      <BubblyContainer />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />}></Route>
          <Route
            path="Work"
            element={
              <Suspense fallback={<>...</>}>
                <Work />
              </Suspense>
            }
          />
          <Route
            path="About"
            element={
              <Suspense fallback={<>...</>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="Contact"
            element={
              <Suspense fallback={<>...</>}>
                <Contact />
              </Suspense>
            }
          />
          <Route path="*" element={<>No Match</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
