import React, { useEffect, useState } from "react";
import Products from "../../components/DisplayProducts/Products";
import { useLoaderData } from "react-router-dom";

const Laptops = () => {
    const data = useLoaderData();
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    const newData = data.filter((item) => item.category === "Laptop");
    setCategoryData(newData);
  }, []);
  return (
    <div>
      <Products data={categoryData}></Products>
    </div>
  );
};

export default Laptops;