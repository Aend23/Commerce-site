import { useState, useEffect, useRef } from "react";
import HomePage from "./HomePage";
import Cards from "../components/Cards";
import Row from "../components/Row";
import requests from "../utils/request";

export default function Landing() {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState("");
  const url = requests.requestAllCategories;
  let priceRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [price]);

  const handlePrice = (e) => {
    setPrice(prev => priceRef.current.value);
  };

  const handleClear = (e) => {
    setPrice("");
    priceRef = "";
  };

 const handleFilter =()=>{
    const priceInput =document.getElementById("priceInput");
    priceInput.classList.toggle("invisible");
  }
  console.log(price);
  return (
    <div>
      <HomePage />
      <Cards />
      <h1 className="font-bold text-xl text-center text-[#003049] py-4 bg-gray-300/60 capitalize">
        See our Products
      </h1>
      <div className="mx-2 justify-center items-center flex">
        <button
        onClick={handleFilter}
          type="button"
          className="p-2 px-4 bg-slate-400 text-white rounded my-3 mr-3"
        >
          Filter
        </button>
        <div className="invisible" id="priceInput">
        <input
          className="border-2 border-black rounded p-2 my-1 text-black "
          placeholder="Enter price"
          type="text"
          ref={priceRef}
          onKeyDown={(e)=>{
            if(e.key === "Enter")
            handlePrice();
          }}
        />

        <button className="m-2 font-semibold text-center items" onClick={handlePrice}>Apply</button>
        <button className="m-2 font-semibold text-center items" onClick={handleClear}>Clear</button>
        </div>
      </div>

      <div className="bg-[#a2d2ff] px-4 py-8">
        {products?.map((category, id) => {
          return <Row productUrl={category} key={id} maxPrice={price}/>;
        })}
      </div>
      <div className="w-full h-1 bottom-[-0.5rem] bg-zinc-800 "></div>
    </div>
  );
}
