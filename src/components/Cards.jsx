import React from 'react';
import Card from './Card';
import Mens from "../assets/mens.webp"
import Womens from "../assets/womens.jpg"
import Electronics from "../assets/skincare.jpg";
import Home from "../assets/home.jpg";
import Laptops from "../assets/laptops.jpg";
import Smartphones from "../assets/smartphones.jpg";
import AutoBike from "../assets/autobike.jpg";
import Sunglasses from "../assets/sunglasses.webp";



export default function Cards() {
  return (
    <div className='box-border '>
      <div className='cards grid'>
        <Card title={"Mens"} imgUrl={Mens}/>
        <Card title={"Womens"} imgUrl={Womens}/>
        <Card title={"Laptops"} imgUrl={Laptops}/>
        <Card title={"Laptops"} imgUrl={Smartphones}/>
        <Card title={"Skincare"} imgUrl={Electronics}/>
        <Card title={"Home"} imgUrl={Home}/>
        <Card title={"motorcycle"} imgUrl={AutoBike}/>
        <Card title={"Sunglasses"} imgUrl={Sunglasses}/>
      </div>
      <div className="w-full h-1 bottom-[-0.5rem] bg-zinc-800 "></div>

    </div>
  )
}
