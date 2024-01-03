import React, { useState,useEffect } from "react";
import requests from "../utils/request";
import { useNavigate } from "react-router-dom";

export default function Row({ productUrl,maxPrice="" }) { 
  const [product,setProduct] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(requests.requestCategory+productUrl);
        const data = await response.json();
        setProduct(data.products);

        let filteredProducts;
        if (maxPrice !== "") {
          filteredProducts = (data.products).filter(
            (item) => item?.price <= parseFloat(maxPrice)
            );
            setProduct(filteredProducts);
        }
        else{
          setProduct(data.products);
        }

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [  maxPrice, productUrl]);




  const navigate = useNavigate();
  const handleVisit =(item)=>{
    navigate("/details",{state:item})
  }

  return (
    <div className="">
      <div className="grid row ">
        {product?.map((item,id) => {
          return (
            <div className="border-2 border-black p-8 m-2 rounded-md bg-[#bfdbf7] bg-opacity-30 relative hover:scale-105 transition ease-out box" onClick={()=> handleVisit(item)} key={id}>
              <span className="font-bold text-[#13315c] absolute top-1 left-4">{item?.brand}</span>

              <div className=" flex justify-center py-4">
                <img
                  src={
                    item?.images[0]
                  }
                  alt=""
                  className="rounded-md h-52 object-cover"
                />
              </div>
              <div className="info text-center m-2 font-semibold">
                <h2>{item?.title}</h2>
                <div className="text-[#168aad]">
                   {item.price} $ <span className="text-[#13315c] discount pulse">({item?.discountPercentage} % off)</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
