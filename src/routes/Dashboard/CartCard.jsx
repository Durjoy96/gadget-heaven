import React from "react";
import { ImCancelCircle } from "react-icons/im";

const CartCard = ({ data }) => {
  const { product_id, product_title, product_image, price, description } = data;
  return (
    <div className="bg-base-100 p-6 rounded-2xl flex gap-6 relative">
      <div className="max-w-52 h-32 bg-base-200 rounded-2xl">
        <img
          className="w-full h-full object-contain"
          src={product_image}
          alt=""
        />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-card-content">
          {product_title}
        </h3>
        <p className="text-base text-card-content-secondary my-4">
          {description}
        </p>
        <span className="inline-block text-xl font-semibold text-card-content-secondary">
          Price: ${price}
        </span>
      </div>
      <ImCancelCircle className="absolute top-6 right-6 w-6 h-6 fill-red-500 cursor-pointer hover:opacity-70" />
    </div>
  );
};

export default CartCard;
