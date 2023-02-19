import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";
import "./App.css";

const Home = () => <section>Home</section>;
const Work = () => <section>Work</section>;
const About = () => <section>About</section>;
const Contact = () => <section>Contact</section>;

function App() {
  return (
    <BrowserRouter>
      <BubblyContainer />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BubblyLink to="/">Home</BubblyLink>
              <BubblyLink to="/work">Work</BubblyLink>
              <BubblyLink to="/about">About</BubblyLink>
              <BubblyLink to="/contact">Contact</BubblyLink>
              <Outlet />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<>No Match</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
