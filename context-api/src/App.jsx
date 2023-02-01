import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Products from "./components/Products";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col bg-neutral-700 text-neutral-50 pt-12">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
