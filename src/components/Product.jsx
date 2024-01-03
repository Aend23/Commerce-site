import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import {useState,useEffect,useLayoutEffect} from "react";
import FlashCard from './FlashCard';
import { useLocation } from 'react-router-dom';
import requests from '../utils/request';

export default function Product({ productUrl }) {
  const [scrollX, setScrollX] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [product ,setProduct] = useState([]);

  const updateSliderWidth = () => {
    const sliderElement = document.getElementById('slider');
    setSliderWidth((prev)=> sliderElement.offsetWidth );
  };

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(requests.requestCategory+productUrl);
        const data = await response.json();
        setProduct(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    updateSliderWidth();

    // const interval = setInterval(()=>{
      //   slideRight();
      // },4000);
      
      return () => {
        
        window.removeEventListener('resize', updateSliderWidth);
        // clearInterval(interval);
      };
    }, []);
    
    window.addEventListener('resize', updateSliderWidth);
    
  

  const slideLeft = () => {
    const newScrollX = Math.max(0, scrollX - sliderWidth);
    document.getElementById('slider').scrollTo({
      left: newScrollX,
      behavior: 'smooth'
    });
    setScrollX((prev) => newScrollX);
  };
  
  const slideRight = () => {
    const newScrollX = Math.min(scrollX + sliderWidth, (product.length - 1) * sliderWidth);
    document.getElementById('slider').scrollTo({
      left: newScrollX,
      behavior: 'smooth'
    });
    setScrollX((prev) => newScrollX);
  };
  return (
<>
      <div className='relative '>
        <div className='flex items-center relative group'>
        <MdChevronLeft className='bg-white left-0 z-50 absolute opacity-50 hover:opacity-90 rounded-full hidden group-hover:block cursor-pointer' size={35} onClick={slideLeft}/>
            <div id='slider' className='whitespace-nowrap mt-2 mb-6  overflow-x-scroll scrollbar-hide overflow-hidden w-full' >
               
            {product?.map((item,id) => {
              return (
                <FlashCard item={item} key={id}/>
                );
        })}
            </div>
            <MdChevronRight className='bg-white right-0 z-50 absolute opacity-50 hover:opacity-90 rounded-full hidden group-hover:block cursor-pointer' size={35} onClick={slideRight}/>
            </div>
        </div>

                </>

  );
}
