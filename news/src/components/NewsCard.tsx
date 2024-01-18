import React, {useEffect, useState} from 'react'
import Button from './NewsCardButton'
import {NewsCardProps} from '../utils/types'


const NewsCard: React.FC<NewsCardProps> = ({news}) => {

    const [logoUrl, setLogoUrl] = useState<string>()
    
    
    useEffect(() => {
    const websiteUrl = `https://www.${news.source}`;
    const proxyUrl = `http://localhost:3002/api/proxy?websiteUrl=${encodeURIComponent(websiteUrl)}`;
    
    // Make a request to the proxy server
    fetch(proxyUrl)
        .then(response => response.json())
        .then(data => {
        console.log('Data from proxy server:', data);
        setLogoUrl(data)
        })
        .catch(error => {
        console.error('Error fetching data from proxy server:', error);
        });
    }, []);



    const [savedArticle, setSavedArticle] = useState<boolean>(false)
    
    const addToSaved = () => {
        setSavedArticle( prev => !prev)
    };

    const openUrlInNewTab = () => {
        const url = `${news.url}`;  
        window.open(url, '_blank');
    }

    


    const originalDate = news.published_at;
    const dateObject = new Date(originalDate);
    const formattedDate = dateObject.toLocaleDateString();

  return (
    <div className="flex flex-col items-center md:flex-row justify-between w-[90vw] md:w-[55rem] md:h-80 border min-w-80 rounded-md ml-4 mt-4 shadow-md">
        <div className='left-section flex-1 flex flex-col gap-3 w-full md:w-[60%] p-4 h-full'>
            <div className='top-sect flex justify-between items-center capitalize font-semibold'>
                <div className='flex gap-2 items-center uppercase font-semibold'>
                    <div className="w-10 p-1 border rounded-sm bg-gray-50"><img src={logoUrl} alt="" className="w-full rounded-sm" /></div>
                    <p className='capitalize'>{news.source}</p>
                </div>
                <div>
                    <p className='text-sm'>{formattedDate}</p>
                </div>
            </div>
            <div className='w-full '>
                <h2 className='text-xl font-semibold capitalize '>{news.title}</h2>
            </div>
            <div>
                <p className='text-gray-500'>{news.description} </p>
            </div>
            <div className='flex justify-between mt-auto items-center '>
                <Button onClick={openUrlInNewTab} >Read More</Button>
                <p className='text-[1rem] capitalize font-semibold'>{news.categories.length > 1? news.categories[1] : news.categories[0]}</p>
            </div>
        </div>

        
        <div className='rigth-section relative w-full h-full md:w-[40%] mb-0 sm:mb-0'>
            <img src={news.image_url} alt="" className='w-full h-full object-cover rounded-md md:rounded-r-md md:rounded-none' />
            <svg xmlns="http://www.w3.org/2000/svg" className={` ${savedArticle? 'fill-black' : 'fill-white'} ionicon absolute p-2 h-8 w-8 bg-white  bottom-2 right-2 cursor-pointer rounded-md border`} onClick={addToSaved} viewBox="0 0 512 512"><path d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
        </div>

       
    </div>
  )
}

export default NewsCard