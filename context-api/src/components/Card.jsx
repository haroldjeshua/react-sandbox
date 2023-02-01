import { useState, useContext } from "react";
import CartContext from "../CartContext";
import { IoShirtOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";

const Card = ({ name, price }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      onClick={() => addToCart(name, price)}
      className="flex flex-col bg-neutral-900 rounded-lg transition ease-linear hover:-translate-y-1 cursor-pointer"
    >
      <div className="flex justify-center p-4">
        <IoShirtOutline size={100} />
      </div>
      <div className="flex flex-col p-2 bg-neutral-800 rounded-b-lg">
        <div className="flex justify-between items-center gap-1">
          <h3>{name}</h3>
          <FiShoppingBag />
        </div>
        <h4>${price}</h4>
      </div>
    </div>
  );
};

export default Card;
