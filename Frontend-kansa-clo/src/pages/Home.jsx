import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// function Home() {
//   const products =[
//           {
//             id: 1,
//             name: 'Jacket',
//             price: 5000,
//           },
//           {
//             id: 2,
//             name: 'Jeans',
//             price: 3000,
//           },
//           {
//             id: 3,
//             name: 'T-Shirt',
//             price: 1200,
//           }
//         ];

//   return (
//     <div>{
//     products.map((product)=>(
//           <div key={product.id}>
//             <h2>Name:{product.name}</h2>
//             <p>Price:{product.price}</p>
//             <p>================</p>
//           </div>
//         ))}
//         </div>
    
//   );
// }

// export default Home;


function Home() {
  const clothes = [
    { id: 1,
      name: "T-Shirt",
      price: 1200,
    },
    { id: 2, 
      name: "Hoodie", 
      price: 2500,
    },
    { id: 3, 
      name: "Jeans", 
      price: 3000,
    },
  ];

  return (
    <div>
      {clothes.map((cloth) => (
        <div key={cloth.id}>
          <h2>{cloth.name}</h2>
          <p>Price: ${cloth.price}</p>
          <p>================</p>
        </div>
      ))}
    </div>
  );
}

export default Home;