import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Products from "./components/Products";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col bg-neutral-700 text-neutral-50 pt-12">
      <CartProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
