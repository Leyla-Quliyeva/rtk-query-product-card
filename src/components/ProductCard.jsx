import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      className="p-5 rounded-xl border-2 border-gray-300 shadow-xl transition-all duration-300
                hover:shadow-xl hover:border-blue-400 hover:scale-105"
    >
      <div className="text-center ">
        <img
          className="w-[250px] h-75 mx-auto m-5 "
          src={product.image}
          alt={product.title}
        />
        <h3 className="text-lg font-bold m-5">{product.title}</h3>
        <p className="text-green-600 font-bold m-2">$ {product.price}</p>
        <span className="text-yellow-500 font-semibold">
          ⭐ {product.rating.rate}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
