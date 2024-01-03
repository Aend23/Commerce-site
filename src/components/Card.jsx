import React from 'react'
import { FaEye } from "react-icons/fa";
import { BsCartPlusFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export default function Card({title,imgUrl}) {
  const navigate = useNavigate();

  const handleCategory = (title)=>{
    navigate("/shop",{state:title});
    // console.log(title)
  }

  return (
    <div className="box " onClick={()=>handleCategory(title)}>
          <h2 className='text-2xl font-bold mb-4 '>{title}</h2>
          <div className="img relative  justify-center flex border-2 p-4 rounded-md border-[#0077b6] hover:scale-110 transition ease-linear  duration-300">
          <img src={imgUrl} className="object-fit h-20 rounded-md " alt=""/>
            <div className='overlay-content flex gap-12 text-2xl absolute top-3/4 cursor-pointer text-white items-center'>
            <FaEye/>
            </div>
          </div>
        </div>
  )
}
