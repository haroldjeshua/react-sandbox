import { useState } from "react";
import { IoShirtOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";

const Card = ({ name, price }) => {
  return (
    <div className="card">
      <div className="product-wrapper">
        <IoShirtOutline />
      </div>
      <div className="purchase">
        <h3>{name}</h3>
        <FiShoppingBag />
      </div>
      <h4>${price}</h4>
    </div>
  );
};

export default Card;
