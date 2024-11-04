import React from "react";
import Product from "./Product";

const Products = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {Array.isArray(data)
        ? data.map((item) => (
            <Product key={item.product_id} data={item}></Product>
          ))
        : "data-coming-soon"}
    </div>
  );
};

export default Products;
