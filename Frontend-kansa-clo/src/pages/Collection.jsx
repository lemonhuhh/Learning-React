import React from "react";
import { useState, useEffect } from "react";
import product from "../data/data.js";

function Collection() {
  // const [products, setProducts] = useState();
  // async function getData() {
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const data = await res.json();
  //     setProducts(data);
  //   } catch (error) {
  //     console.log("Error fetching the data.");
  //   }
  // }
  // getData();

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   alert("Count is changed " + count);
  //   localStorage.setItem("Count", count);
  // }, [count]);

  // const [price, setPrice] = useState(1000);
  // const handleIncrement = () => {
  //   setCount(count + 1);

  //   setPrice(price + price);
  // };

  // const handledecrement = () => {
  //   setCount(count - 1);
  // };

  return (
    <>
      <p>Hello</p>
      {/* <div>{products.map(() => {})}</div>
      <div>
        <p>Product no.{count}</p>
        <p>Rs.{price}</p>
        <button onClick={handleIncrement} className="primary-btn">
          +
        </button>
        <button onClick={handledecrement} className="primary-btn"></button>
      </div> */}
    </>
  );
}

export default Collection;
