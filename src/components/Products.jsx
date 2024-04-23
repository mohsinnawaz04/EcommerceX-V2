import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const addProducts = () => {
      for (let i = 0; i <= 35; i++) {
        setproducts((prev) => [...prev, i]);
      }
    };

    addProducts();
  }, []);
  return (
    <div className="flex flex-wrap lg:justify-center lg:items-center lg:px-28 pt-5 lg:pt-10">
      {products.map((num, i) => (
        <ProductCard key={i} />
      ))}
    </div>
  );
};

export default Products;
