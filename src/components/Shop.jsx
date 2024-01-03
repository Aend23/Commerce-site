import React, { useEffect, useState } from "react";
import Product from "./Product";
import Row from "./Row";
import { useLocation } from "react-router-dom";
import requests from "../utils/request";

export default function shop() {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const location = useLocation();
  const title = location.state || "";
  const url = requests.requestAllCategories;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const regex = new RegExp(`^${title}`,"i");        
        let filteredProducts = data.filter((item) => regex.test(item));

        // Filter by price if minPrice and/or maxPrice are set
        if (minPrice !== "" && maxPrice !== "") {
          filteredProducts = filteredProducts.filter(
            (product) =>
              product.price >= parseFloat(minPrice) &&
              product.price <= parseFloat(maxPrice)
          );
        }

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, [title]);
  
  return (
    <>
    {
      products?.map((category,id)=>{
        return(
          <div key={id} className="w-full">
          <Product productUrl={category} />
          <Row productUrl={category} />
          </div>
        )
      })
    }
    </>
  );
}
