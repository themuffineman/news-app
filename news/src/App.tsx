import React from 'react'
import NavBar from './sections/NavBar'
import TrendingArticle from './components/TrendingArticle'
import NewsGrid from './sections/NewsGrid'

const App: React.FC = () => {

  return (
    <div className='flex flex-col items-center justify-between py-5 gap-2'>
      <NavBar/>
      <TrendingArticle/>
      <NewsGrid/>
    </div>
  )
}

export default App