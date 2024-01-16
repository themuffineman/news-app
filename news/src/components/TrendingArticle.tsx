import React, { useEffect, useState } from 'react'
import TrendingButton from './TrendingButton'

const TrendingArticle:React.FC = () => {

  const [headlines, setheadlines] = useState([])

  useEffect(()=> {getheadlines()},[])

  async function getheadlines() {

    try{

      const result = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=25dc93868aa84bf5a8da61e33e2a7b3f')

      const jsonResult = await result.json()

      setheadlines(()=> jsonResult.articles[0])


    }
    catch(error){
      console.log(error)
    }
  }

  


  return (
    <div className='relative rounded-lg h-max  '>
    <div className='absolute z-10 w-full h-full bg-black bg-opacity-70 top-0 left-1/2 -translate-x-1/2 flex p-2 rounded-lg' style={{backdropFilter: 'blur(5px)'}}  ></div>
    <div className=' w-[90vw] sm:w-[80vw] h-max  relative rounded-md bg-opacity-5 bg-center bg-cover' style={{backgroundImage: `url(${headlines.urlToImage})`}}>

        <div className=' flex flex-col md:flex-row w-full h-full z-20 justify-between gap-5 items-center px-5'>
            <div className=' w-full md:w-1/2 h-full flex justify-between flex-col gap-5 pl-4 my-12'>
                <p className=' bg-yellow-200 font-semibold text-black px-4 w-max rounded-xl py-2  z-20 '>Top Story</p>
                <h1 className=' text-4xl lg:text-7xl font-bold capitalize  z-20 text-white'>{headlines.title}</h1>
                <p className='text-white opacity-90  z-20 text-lg'> {headlines.description} </p>
                <TrendingButton>Read Full Article</TrendingButton>
            </div>
            <div className='w-full md:w-[23rem] p-4  z-20 '>
                <img src={headlines.urlToImage} alt="" className='w-full rounded-md border' />
            </div>
        </div>

    </div>
    </div>
  )
}

export default TrendingArticle