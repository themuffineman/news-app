import React from 'react'
import cavicun from '../assets/cucina-desktop.jpg'
import TrendingButton from './TrendingButton'

const TrendingArticle:React.FC = () => {
  return (
    <div className='relative rounded-lg h-maz '>
    <div className='absolute z-10 w-full h-full bg-black bg-opacity-70 top-0 left-1/2 -translate-x-1/2 flex p-2 rounded-lg' style={{backdropFilter: 'blur(5px)'}}  ></div>
    <div className='w-[80vw] h-max  relative rounded-md bg-opacity-5 bg-center bg-cover' style={{backgroundImage: `url(${cavicun})`}}>
        <div className=' flex w-full h-full z-20 justify-between gap-5 items-center px-5'>
            <div className=' w-1/2 h-full flex justify-between flex-col gap-5 pl-4 my-12'>
                <p className=' bg-yellow-200 font-semibold text-black px-4 w-max rounded-xl py-2  z-20 '>Top Story</p>
                <h1 className='text-7xl font-bold capitalize  z-20 text-white'>The british are coming</h1>
                <p className='text-white opacity-90  z-20 text-lg'> Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Lorem ipsum dolor sit amet consectetur</p>
                <TrendingButton>Read Full Article</TrendingButton>
            </div>
            <div className='w-[23rem] p-4  z-20 '>
                <img src={cavicun} alt="" className='w-full rounded-md border' />
            </div>
        </div>
    </div>
    </div>
  )
}

export default TrendingArticle