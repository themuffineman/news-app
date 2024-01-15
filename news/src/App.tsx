import React from 'react'
import NavBar from './sections/NavBar'
import TrendingArticle from './components/TrendingArticle'
import NewsGrid from './sections/NewsGrid'
import Sources from './sections/Sources'

const App: React.FC = () => {

  return (
    <>
      <NavBar/>
      <div className='flex flex-col items-center justify-between py-5 pt-40 gap-2 scroll-smooth'>
        <TrendingArticle/>
        <Sources/>
        <NewsGrid/>
      </div>
    </>
  )
}

export default App