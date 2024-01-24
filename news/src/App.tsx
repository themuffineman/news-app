import React, { useEffect, useState } from 'react'
import TrendingArticle from './components/TrendingArticle'
import NewsGrid from './sections/NewsGrid'
import Sources from './sections/Sources'
import { getheadlines } from './utils/functions'
import { HeadlineItem } from './utils/types';

const App: React.FC = () => {

  const [headlines, setHeadlines] = useState<HeadlineItem>({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getheadlines();
        setHeadlines(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
 
    <div className='flex flex-col items-center justify-between py-5 pt-40 gap-2 scroll-smooth'>
      <TrendingArticle headlines={headlines}/>
      <Sources/>
      <NewsGrid/>
    </div>

  )
}

export default App