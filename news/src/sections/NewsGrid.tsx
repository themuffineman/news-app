import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard'
import LoadMore from '../components/LoadMore'
import { latestNewsTypes } from '../utils/types'

const NewsGrid: React.FC = () => {

  const [latestNewsData , setlatestNewsData] = useState<latestNewsTypes[] | [] >([])

  const [loadingMore,setLoadingMore] = useState<boolean>(false)

  const ApiKey: string = '2n8wA4vBFQwSPQh6XUjf6qKlzgoObCfbWC7irZqX'

  useEffect(()=>{
    getNews();
  },[])


  async function getNews(){
    try{
      const newsDataRaw = await fetch(`https://api.thenewsapi.com/v1/news/top?api_token=${ApiKey}&locale=us&limit=3`,)
      const newsDataJson = await newsDataRaw.json()
      setLoadingMore(false)
      setlatestNewsData(prev => [...prev, ...newsDataJson.data])
    }
    catch(error){
      console.error('Error fetching data:', error);
    }
  }


  return (
    <div className='flex flex-col gap-10 justify-between items-center w-[90vw]-t-2 mt-20 p-2' >
      <h2 className='text-3xl sm:text-5xl font-bold capitalize text-black'>Top Stories</h2>
      {latestNewsData.length > 0 ? (
        latestNewsData.map((news: latestNewsTypes) => (
          <div key={news.uuid}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 justify-items-center content-center w-full px-2'>
              <NewsCard news={news} />
            </div>
          </div>
        ))
        ) : (
          <p>No news available.</p>
          )}
      <LoadMore loadingMore={loadingMore} setLoadingMore={setLoadingMore} getNews={getNews} />
    </div>
  );
  
}

export default NewsGrid