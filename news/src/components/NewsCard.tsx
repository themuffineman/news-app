import React, {useState} from 'react'
import favicon from '../assets/favicon.png' 
import cucina from '../assets/cucina-desktop.jpg'
import Button from './NewsCardButton'

const NewsCard: React.FC = () => {

    const [saved, setSaved] = useState<boolean>(false)
    
    const handleSvgClick = () => {
        setSaved( prev => !prev)
    };

  return (
    <div className="flex flex-col sm:flex-row justify-between w-[30rem] h-max border rounded-md ml-4 mt-4 shadow-md">
        <div className='left-section flex-1 flex flex-col gap-3 w-[60%] p-4'>
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
        <div className='rigth-section relative w-[40%]'>
            <img src={cucina} alt="" className='w-full h-full object-cover rounded-r-md' />
            <svg xmlns="http://www.w3.org/2000/svg" className={` ${saved? 'fill-black' : 'fill-white'} ionicon absolute p-2 h-8 w-8 bg-white  bottom-2 right-2 cursor-pointer rounded-md border`} onClick={handleSvgClick} viewBox="0 0 512 512"><path d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
        </div>
    </div>
  )
}

export default NewsCard