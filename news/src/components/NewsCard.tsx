// import React from 'react'
import favicon from '../assets/favicon.png' 
import cucina from '../assets/cucina-desktop.jpg'
import Button from './Button'

const NewsCard = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between w-[30rem] h-max border rounded-md ml-4 mt-4 shadow-md">
        <div className='left-sec flex-1 flex flex-col gap-3 w-[60%] p-4'>
            <div className='top-sect flex justify-between items-center capitalize font-semibold'>
                <div className='flex gap-2 items-center uppercase font-semibold'>
                    <div className="w-10 p-1 border rounded-sm bg-gray-50"><img src={favicon} alt="" className="w-full rounded-sm" /></div>
                    <p>CNN</p>
                </div>
                <div>
                    <p>21 July 2022</p>
                </div>
            </div>
            <div className='w-full '>
                <h2 className='text-xl font-semibold capitalize '>The british are coming</h2>
            </div>
            <div>
                <p className='text-gray-500'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet Lorem</p>
            </div>
            <div className='flex justify-between mt-auto items-center '>
                <Button>Read More</Button>
                <p className='text-[1rem] font-semibold'>Politics, General</p>
            </div>
        </div>
        <div className='rigth-sec w-[40%]'>
            <img src={cucina} alt="" className='w-full h-full object-cover rounded-r-md' />
        </div>
    </div>
  )
}

export default NewsCard