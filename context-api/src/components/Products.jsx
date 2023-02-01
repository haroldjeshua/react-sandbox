import { useState } from "react";
import Card from "./Card";

const Products = () => {
  const products = [
    { name: "vest", price: 500 },
    { name: "sweater", price: 750 },
    { name: "jacket", price: 1000 },
    { name: "hoodie", price: 800 },
    { name: "tshirt", price: 650 },
    { name: "slacks", price: 350 },
  ];

  return (
    <div className="w-full max-w-xl h-[calc(100vh_-_48px)] mx-auto grid grid-cols-4 place-content-center gap-4">
      {products.map((product, index) => (
        <Card key={index} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default Products;
