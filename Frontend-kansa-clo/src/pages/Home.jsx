import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Productcard from "../components/reusable/Productcard";
import Herobanner from "../data/Heroslider"
import { useState } from "react";

// function Home() {
//   const clothes = [
//     { id: 1,
//       name: "T-Shirt",
//       price: 1200,
//     },
//     { id: 2,
//       name: "Hoodie",
//       price: 2500,
//     },
//     { id: 3,
//       name: "Jeans",
//       price: 3000,
//     },
//     {
//       id: 4,
//       name: "Joggers",
//       price: 1800,
//     },
//     {
//       id: 5,
//       name: "Shirt",
//       price: 1500,
//     }
//   ];

//   return (
//     <div className="products">
//       <div className="product-box">
//       <h1>Our Products</h1>
//       {clothes.map((cloth) => (
//         <div key={cloth.id}>
//           <h2>{cloth.name}</h2>
//           <p>Price: ${cloth.price}</p>
//         </div>

//       ))}
//       </div>
//     </div>
//   );
// }

// export default Home;

function Home() {

  const [currentslide, setCurrentSlide] = useState(0)

  const nextSlide = () =>{
    setCurrentSlide((currentslide + 1) % Herobanner.length)
  }

  const previousSlide =()=>{
    setCurrentSlide((currentslide - 1 + Herobanner.length) % Herobanner.length)
  }

  const [liked, setLiked] = useState(false)

  // const handlelike =() =>{
  //   setLiked ((!liked ? "Wishlisted" :))
  // }  you are doing something here

  return (
    <>
    <div>
      
        <h1 className="text-(--product-title)">Our products</h1>
      </div>
      {/* <div>
        <Productcard />
      </div> */}

      <section>
        <div>
          {Herobanner.map((slide, index) =>
          <div key={Herobanner.id} style={{display: index == currentslide ? 'block' : 'none'}}>
            <h2>{slide.id}</h2>
            <p>{slide.Description}</p>
          </div> )}
        </div>
        <div>
          <button onClick={previousSlide} className="primary-btn">Previous</button>
          <button onClick={nextSlide} className="primary-btn">Next</button>

          <button onClick={handlelike}>Wishlist</button>
          {/* <button onClick={}>Add to wishlist</button>  You are doing something here */}
        </div>
      </section>
      
    </>
  );
}

export default Home;
