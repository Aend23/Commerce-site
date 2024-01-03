import React from "react";
import { useNavigate } from "react-router-dom";

export default function FlashCard({ item }) {
const navigate = useNavigate();
  const handleVisit =(item)=>{
    navigate("/details",{state:item})
  }
  return (
    <div className='box-border inline-block mr-2 w-full bg-gradient-to-r from-indigo-500 p-4 rounded-md '>
      <div className="flex gap-6 justify-around mx-16 my-20 overflow-hidden max-md:flex-col items-center">
      <div className='' onClick={()=>handleVisit(item)}>
        <img
          src={item?.thumbnail}
          alt=""
          className="object-fit h-[30rem] rounded-xl "
        />
      </div>
        <div className="info self-center block">
          <div className="brand text-blue-500 flex gap-6 items-center ">
            <h2 className="border-r-2 border-black text-3xl pr-4 font-medium">
              {item?.brand}
            </h2>
            <span className="text-xl font-medium">{item?.title}</span>
          </div>
          <p className="desp rounded-lg border-t-2 border-b-2 p-2 text-xl font-bold text-wrap my-6">
            {item?.description}
          </p>
          <span className="text-2xl font-bold flex">
            Discount upto {item?.discountPercentage}%{" "}
          </span>
          <br />
          <button className="text-xl font-medium border-2 p-1 rounded-lg " onClick={()=>handleVisit(item)}>
            Grab Now
          </button>
      </div>
      </div>
    </div>
  );
}
