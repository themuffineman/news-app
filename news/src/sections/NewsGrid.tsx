import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard'
import LoadMore from '../components/LoadMore'
import { latestNewsTypes } from '../utils/types'

const NewsGrid: React.FC = () => {

  const [latestNewsData , setlatestNewsData] = useState<latestNewsTypes[] | [] >([])
  const [pageCount, setPageCount] = useState<number>(1)

  const [loadingMore,setLoadingMore] = useState<boolean>(false)

  const ApiKey: string = '2n8wA4vBFQwSPQh6XUjf6qKlzgoObCfbWC7irZqX'

  useEffect(()=>{
    getNews();
  },[])



  async function getNews() {
    try {
      const newsDataRaw = await fetch(`https://api.thenewsapi.com/v1/news/top?api_token=${ApiKey}&locale=us&limit=3&page=${pageCount}`);
      const newsDataJson = await newsDataRaw.json();
      

      const combinedArray = [...latestNewsData, ...newsDataJson.data]
      const finalNewsData: latestNewsTypes[] = combinedArray.filter((value, index, self) => self.findIndex(obj => obj.uuid === value.uuid) === index);

      setLoadingMore(false);
      setPageCount(prev => prev + 1);
      setlatestNewsData(finalNewsData);



    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  
  


  return (
    <div className='flex flex-col gap-10 justify-between items-center w-[90vw]-t-2 mt-20 p-2'>
    <h2 className='text-3xl sm:text-5xl font-bold capitalize text-black'>Top Stories</h2>
    <div className='grid grid-cols-1 2xl:grid-cols-2 gap-20 justify-items-center self-center content-center w-full p-2'>
      {latestNewsData.length > 0 ? (
        latestNewsData.map((news: latestNewsTypes) => (
          <div key={news.uuid}>
            <NewsCard news={news} />
          </div>
        ))
      ) : (
        <p>No news available.</p>
      )}
    </div>
    <LoadMore loadingMore={loadingMore} setLoadingMore={setLoadingMore} getNews={getNews} />
    </div>
);}

export default NewsGrid