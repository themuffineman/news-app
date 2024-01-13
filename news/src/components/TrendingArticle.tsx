import React from 'react'
import cavicun from '../assets/cucina-desktop.jpg'

const TrendingArticle = () => {
  return (
    <div className='w-[80vw] h-max  relative rounded-md bg-center bg-cover' style={{backgroundImage: `url(${cavicun})`}}>
        <div className=' flex w-full h-full z-20'>
            <div className='flex-1 self-center h-[50%] flex justify-between flex-col gap-5 pl-4'>
                <p className='bg-white text-black px-4 w-max rounded-xl py-2 '>Trending Story</p>
                <h1 className='text-7xl font-bold capitalize text-white w-[80%]'>The british are coming</h1>
                <p className='text-white opacity-90 text-lg'> Lorem ipsum dolor sit amet consectetur, adipisicing elit.   </p>
            </div>
            <div className=' w-full h-full p-5 flex-1'>
                <img src={cavicun} alt="" className='w-full h-full object-cover rounded-md' />
            </div>
        </div>
        <div className='absolute z-10 w-full h-full bg-black bg-opacity-80 top-0 left-1/2 -translate-x-1/2 flex p-2 rounded-lg'  ></div>
    </div>
  )
}

export default TrendingArticle