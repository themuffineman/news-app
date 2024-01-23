import React, {useState, useEffect} from 'react'
// import NewsGrid from '../sections/NewsGrid'
import NewsCard from '../components/NewsCard'
import LoadMore from '../components/LoadMore'
import { latestNewsTypes } from '../utils/types'
import { useParams } from 'react-router-dom'

const SearchPage:React.FC = () => {

  const {searchQuery} = useParams()


  const [SearchNewsData , setSearchNewsData] = useState<latestNewsTypes[] | [] >([])
  const [pageCount, setPageCount] = useState<number>(1)

  const [loadingMore,setLoadingMore] = useState<boolean>(false)

  const ApiKey: string = '2n8wA4vBFQwSPQh6XUjf6qKlzgoObCfbWC7irZqX'

  useEffect(()=>{
    setSearchNewsData([]);
    setPageCount(1)
    getNews();
  },[searchQuery])



  async function getNews() {
    try {
      const newsDataRaw = await fetch(`https://api.thenewsapi.com/v1/news/all?api_token=${ApiKey}&locale=us&limit=3&page=${pageCount}&search=${searchQuery}`);
      const newsDataJson = await newsDataRaw.json();
  
      // Use the functional form of the state updater to ensure you're working with the latest state
      setSearchNewsData(prevSearchNewsData => {
        // Combine the new data with the existing data
        const combinedArray = [...prevSearchNewsData, ...newsDataJson.data];
  
        // Remove duplicates based on the 'uuid' property
        const finalNewsData: latestNewsTypes[] = combinedArray.filter((value, index, self) => self.findIndex(obj => obj.uuid === value.uuid) === index);
  
        return finalNewsData;
      });
  
      setLoadingMore(false);
      setPageCount(prev => prev + 1);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  

  
  


  return (
    <div className='flex flex-col gap-10 justify-between items-center w-[90vw]-t-2 mt-36 p-2'>
    <h2 className='text-3xl sm:text-5xl font-bold capitalize text-black'>Search Results For: <span className='font-normal'>{searchQuery}</span></h2>
    <div className='grid grid-cols-1 2xl:grid-cols-2 gap-20 justify-items-center self-center content-center w-full p-2'>
      {SearchNewsData.length > 0 ? (
        SearchNewsData.map((news: latestNewsTypes) => (
          <div key={news.uuid}>
            <NewsCard news={news} />
          </div>
        ))
      ) : (
        <p>No Results.</p>
      )}
    </div>
    <LoadMore loadingMore={loadingMore} setLoadingMore={setLoadingMore} getNews={getNews} />
    </div>
);
}

export default SearchPage