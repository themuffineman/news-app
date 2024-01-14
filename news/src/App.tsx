import React from 'react'
import NavBar from './sections/NavBar'
import TrendingArticle from './components/TrendingArticle'
const App: React.FC = () => {

  return (
    <div className='flex flex-col items-center justify-between py-5 gap-2'>
      <NavBar/>
      <TrendingArticle/>
    </div>
  )
}

export default App