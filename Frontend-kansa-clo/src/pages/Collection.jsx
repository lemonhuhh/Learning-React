import React from "react";
import { useState } from "react";
import product from '../data/data.js'



function Collection() {
  const [count, setCount] = useState(1);

  const [price, setPrice] = useState(product.price);
  const handleIncrement = () => {
    setCount(count + 1);
    if(setPrice === product.price){
    setPrice(product.price + product.price);
    }
  };

  const handledecrement = () => {
    setCount(count - 1);
    

  };

  return (
    <>
      <div>
        <p>Product no.{count}</p>
        <p>Rs.{product.price}</p>
        <button onClick={handleIncrement} className="primary-btn">
          +
        </button>
        <button onClick={handledecrement} className="primary-btn">
          -
        </button>
      </div>
    </>
  );
}

export default Collection;
