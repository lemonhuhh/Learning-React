import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Productcard from "../components/reusable/Productcard";
import Herobanner from "../data/Heroslider";
import { useState, useEffect } from "react";
import hero from "../assets/hero.jpg"

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
  const [currentslide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentslide + 1) % Herobanner.length);
  };

  const previousSlide = () => {
    setCurrentSlide((currentslide - 1 + Herobanner.length) % Herobanner.length);
  };

  const [liked, setLiked] = useState(false);

  // const handlelike =() =>{
  //   setLiked ((!liked ? true : false))
  // }

  const name = [
    {
      name: "Surajan",
      age: 25,
      role: "Teacher",
    },
    {
      name: "Prabin",
      age: 18,
      role: "Student",
    },
  ];
  localStorage.setItem("name", "Prabin");
  localStorage.setItem("age", 25);
  localStorage.setItem("Names", JSON.stringify(name));

  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-badge">New Arrivals — Festive 2026</span>

            <h1>
              Redefining
              <span> Timeless </span>
              Luxury.
            </h1>

            <p>
              Crafted with history, refined with elegance, made for those who appreciate true artistry.
            </p>

            <div className="hero-actions">
              <a href="#" className="hero-btn primary">
                SHOP COLLECTION
                <span>→</span>
              </a>

              <a href="#" className="hero-btn secondary ">
                EXPLORE NEW ARRIVALS
              </a>
            </div>
          </div>

          <div className="hero-visual">

            <div className="hero-card">
              <div className="hero-card-image">
                <img
                  src={hero}
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h1 className="text-(--product-title)">Our products</h1>
      </div>
      {/* <div>
        <Productcard />
      </div> */}
      <section>
        <div>
          {Herobanner.map((slide, index) => (
            <div
              key={Herobanner.id}
              style={{ display: index == currentslide ? "block" : "none" }}
            >
              <h2>{slide.id}</h2>
              <p>{slide.Title}</p>
              <p>{slide.Description}</p>
            </div>
          ))}
        </div>
        <div>
          <button onClick={previousSlide} className="primary-btn">
            Previous
          </button>
          <button onClick={nextSlide} className="primary-btn">
            Next
          </button>

          {/* <button onClick={handlelike}>Add to wishlist</button> */}
        </div>
      </section>
    </>
  );
}

export default Home;
