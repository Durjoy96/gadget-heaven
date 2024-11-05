import React, { useContext } from "react";
import CartCard from "./CartCard";
import { sendAddToCardData } from "../Root";
import { GoSortDesc } from "react-icons/go";

const Cart = () => {
  const addToCartData = useContext(sendAddToCardData);

  return (
    <div>
      <div className="flex flex-col items-center justify-between md:flex-row">
        <h3 className="text-2xl font-bold text-base-content">Cart</h3>
        <div className="flex flex-col gap-6 items-center md:flex-row">
          <p className="text-2xl font-bold text-base-content">
            Total Cost: $
            {addToCartData.reduce((acc, curr) => acc + curr.price, 0)}
          </p>
          <button className="flex items-center gap-2 px-6 py-1 bg-transparent rounded-full border border-primary text-base font-medium text-primary hover:opacity-80">
            Sort by Price <GoSortDesc className="w-6 h-6" />
          </button>
          <button className="px-6 py-1 bg-primary rounded-full border border-primary text-base font-medium text-primary-content hover:opacity-80">
            Purchase
          </button>
        </div>
      </div>
      <div className="mt-8 space-y-6">
        {addToCartData.map((item, idx) => (
          <CartCard key={idx} data={item}></CartCard>
        ))}
      </div>
    </div>
  );
};

export default Cart;
