import React from "react";
import product from "../../data/data";

function Productcard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 justify-between ">
        {product.map((products) => (
          <div
            key={products.id}
            style={{
              border: "2px solid #6a89a7",
              padding: "20px",
              margin: "20px",
            }}
          >
            <img
              src={products.image}
              alt={products.name}
              style={{ height: "200px" }}
            />
            <h2>{products.name}</h2>
            <p>Price:${products.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Productcard;
