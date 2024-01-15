import React, {useState} from 'react'
import favicon from '../assets/favicon.png' 
import Button from './NewsCardButton'
import {NewsCardProps} from '../utils/types'


const NewsCard: React.FC<NewsCardProps> = ({news}) => {
    

    const [savedArticle, setSavedArticle] = useState<boolean>(false)
    
    const addToSaved = () => {
        setSavedArticle( prev => !prev)
    };


    // const originalDate = news.published_at;
    // const dateObject = new Date(originalDate);
    // const formattedDate = dateObject.toLocaleDateString();
    const categories = news.categories.toString();


  return (
    <div className="flex flex-col items-center sm:flex-row justify-between w-[90vw] sm:w-[30rem] h-max border rounded-md ml-4 mt-4 shadow-md">
        <div className='left-section flex-1 flex flex-col gap-3 w-full sm:w-[60%] p-4'>
            <div className='top-sect flex justify-between items-center capitalize font-semibold'>
                <div className='flex gap-2 items-center uppercase font-semibold'>
                    <div className="w-10 p-1 border rounded-sm bg-gray-50"><img src={favicon} alt="" className="w-full rounded-sm" /></div>
                    <p className='capitalize'>{news.source}</p>
                </div>
                <div>
                    <p className='text-sm'>Today</p>
                </div>
            </div>
            <div className='w-full '>
                <h2 className='text-xl font-semibold capitalize '>{news.title}</h2>
            </div>
            <div>
                <p className='text-gray-500'>{news.description} </p>
            </div>
            <div className='flex justify-between mt-auto items-center '>
                <Button>Read More</Button>
                <p className='text-[1rem] font-semibold'>{categories}</p>
            </div>
        </div>

        
        <div className='rigth-section flex-1 relative w-64 h-64 sm:h-full sm:w-[40%] mb-4 sm:mb-0'>
            <img src={news.image_url} alt="" className='w-full h-full object-cover rounded-md sm:rounded-r-md sm:rounded-none' />
            <svg xmlns="http://www.w3.org/2000/svg" className={` ${savedArticle? 'fill-black' : 'fill-white'} ionicon absolute p-2 h-8 w-8 bg-white  bottom-2 right-2 cursor-pointer rounded-md border`} onClick={addToSaved} viewBox="0 0 512 512"><path d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
        </div>

       
    </div>
  )
}

export default NewsCard