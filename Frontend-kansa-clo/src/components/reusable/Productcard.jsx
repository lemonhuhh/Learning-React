import React from "react";
import product from "../../data/data";

function Productcard() {
  const handelAddtocart = () => {
    console.log("Add to cart button is clicked");
  };

  return (
    <div className="min-h-screen items-center justify-center gap-5 grid grid-cols-4" >
      {product.map((products) => (
        <div
          key={products.id}
          className="w-77.5 overflow-hidden rounded-2xl bg-white shadow-lg transition hover:tran hover:shadow-xl"
        >
          {/* Image Section */}
          <div className="relative h-57.5 bg-[#625a89] flex items-center justify-center">
            <img
              src={products.image}
              alt={products.name}
              className="w-61.25 object-contain rotate-[-8deg]"
            />

            {/* Heart */}
            <button className="absolute right-3 top-3 h-9 w-9 rounded-full bg-[#7269a0] text-white text-2xl">
              ♡
            </button>
          </div>

          {/* Product Details */}
          <div className="px-4 py-3">
            <h2 className="text-xl font-bold text-gray-800">
              {products.name}
            </h2>

            {/* Tags */}
            <div className="flex gap-2 mt-2">
              <span className="border border-gray-400 rounded px-2 py-1 text-xs">
                EU38
              </span>

              <span className="border border-gray-400 rounded px-2 py-1 text-xs">
                BLACK/WHITE
              </span>
            </div>

            {/* Description */}
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Crossing hardwood comfort with off-court flair. '80s-inspired
              construction, bold details and nothin'-but-net style.
            </p>

            {/* Price + Button */}
            <div className="mt-6 flex items-end justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-gray-500">
                  PRICE
                </p>

                <p className="text-xl font-bold text-gray-800">
                  ${products.price}
                </p>
              </div>

              <button
                onClick={handelAddtocart}
                className="h-10 w-40 rounded-md bg-[#62578c] text-sm font-semibold text-white hover:bg-[#514778] transition"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Productcard;