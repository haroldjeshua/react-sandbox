import { useContext } from "react";
import CartContext from "../CartContext";

const Checkout = () => {
  const { items } = useContext(CartContext);

  return (
    <div className="w-full max-w-xl h-[calc(100vh_-_48px)] mx-auto py-4">
      <div className="flex flex-col gap-4 bg-neutral-800 h-full px-8 py-4 rounded-xl drop-shadow-xl">
        <h1 className="text-3xl text-center">My Cart</h1>
        <div className="flex flex-col gap-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-4"
            >
              <h2 className="text-xl font-bold">{item.name}</h2>
              <h3 className="text-lg">{item.price}</h3>
            </div>
          ))}
        </div>
        <button className="w-32 h-12 inline-flex justify-center items-center self-center gap-2 bg-neutral-900 mt-auto rounded-xl">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
