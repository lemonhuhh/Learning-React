import React from "react";

function Home() {
  const Products = [
    {
      id: 1,
      name: "Jacket",
      price: 5000,
    },
    {
      id: 2,
      name: "Jeans",
      price: 3000,
    },
  ];

  return (
    <div>
      {Products.map((product) => {
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
          </div>
      })}
    </div>
  );
}



export default Home;
