import React from 'react'
import cavicun from '../assets/cucina-desktop.jpg'

const TrendingArticle = () => {
  return (
    <div className='relative rounded-lg h-maz '>
    <div className='absolute z-10 w-full h-full bg-black bg-opacity-80 top-0 left-1/2 -translate-x-1/2 flex p-2 rounded-lg'  ></div>
    <div className='w-[80vw] h-max  relative rounded-md bg-opacity-5 bg-center bg-cover' style={{backgroundImage: `url(${cavicun})`}}>
        <div className=' flex w-full h-full z-50 justify-between gap-5'>
            <div className=' w-1/2 self-center h-full flex justify-between flex-col gap-5 pl-4'>
                <p className='bg-white text-black px-4 w-max rounded-xl py-2 z-50 '>Trending Story</p>
                <h1 className='text-7xl font-bold capitalize z-50 text-white'>The british are coming</h1>
                <p className='text-white opacity-90 z-50 text-lg'> Lorem ipsum dolor sit amet consectetur, adipisicing elit.     </p>
            </div>
            <div className='w-72 p-4 z-50 '>
                <img src={cavicun} alt="" className='w-full rounded-md' />
            </div>
        </div>
    </div>
    </div>
  )
}

export default TrendingArticle