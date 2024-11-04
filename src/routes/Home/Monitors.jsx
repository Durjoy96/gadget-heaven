import React, { useEffect, useState } from "react";
import Products from "../../components/DisplayProducts/Products";
import { useLoaderData } from "react-router-dom";

const Monitors = () => {
    const data = useLoaderData();
    const [categoryData, setCategoryData] = useState([]);
    useEffect(() => {
      const newData = data.filter((item) => item.category === "Monitors");
      setCategoryData(newData);
    }, []);
    return (
      <div>
        <Products data={categoryData}></Products>
      </div>
    );
};

export default Monitors;