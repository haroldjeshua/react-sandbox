import { useContext } from "react";
import CartContext from "../CartContext";

const Checkout = () => {
  return (
    <div className="w-full max-w-xl h-[calc(100vh_-_48px)] mx-auto py-4">
      <div className="flex flex-col gap-4 bg-neutral-800 h-full px-8 py-4 rounded-xl drop-shadow-xl">
        <h1 className="text-3xl text-center">Checkout</h1>
        <div className="cart-list">
          <h2>My Purchases</h2>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
