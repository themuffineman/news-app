// import React from 'react'
import NewsCard from './components/NewsCard'
import SourcesCard from './components/SourcesCard'
import TrendingArticle from './components/TrendingArticle'
const App = () => {

  return (
    <div className='flex flex-col items-center justify-between pb-5 gap-2'>
      <NewsCard/>
      <SourcesCard/>
      <TrendingArticle/>
    </div>
  )
}

export default App