import React from 'react'

export default function HomePage() {

  return (
    <section className='box-border h-full relative w-full bg-[#abc4ff] py-20'>
      <div className='flex items-center justify-around gap-8  px-10 h-[35rem] max-md:flex-col '>
      <div className="leftPanel max-md:mt-8">
        <div className='w-96'>
        <h3 className='font-extrabold text-2xl text-[#023e8a] m-3 border-b-2 border-black'>Your One-Stop Shop for Trendsetting Products</h3>
        <h1 className='  font-bold text-xl text-[#284b63] m-3'>Discover a curated collection of cutting-edge products that redefine innovation. Shop smart, shop innovative, and elevate your shopping experience with us.</h1>
        <button className='bg-[#90e0ef] p-2 rounded-lg text-lg font-bold m-3 self-center' >Shop Now</button>
        </div>
      </div>
      <div className="image">
        <img src="src\assets\home-bg.jpg" alt="" className=''/>
      </div>
      </div>
      <div className="w-full h-1 bottom-[-0.5rem] bg-zinc-800 absolute"></div>
    </section>
  )
}
