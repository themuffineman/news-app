// import React from 'react'
import NewsCard from './components/NewsCard'
import Profile from './components/Profile'
import SearchBar from './components/SearchBar'
import SourcesCard from './components/SourcesCard'
import TrendingArticle from './components/TrendingArticle'
const App = () => {

  return (
    <div className='flex flex-col items-center justify-between py-5 gap-2'>
      <Profile/>
      <SearchBar/>
      <NewsCard/>
      <SourcesCard/>
      <TrendingArticle/>
    </div>
  )
}

export default App