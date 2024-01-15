import React from 'react'
import NavBar from './sections/NavBar'
import TrendingArticle from './components/TrendingArticle'
import NewsGrid from './sections/NewsGrid'
import Sources from './sections/Sources'
import SignUpPage from './pages/SignUpPage'
import SignUpForm from './components/SignUpForm'

const App: React.FC = () => {

  return (
    <>
      <NavBar/>
      <div className='flex flex-col items-center justify-between py-5 pt-40 gap-2 scroll-smooth'>
        <TrendingArticle/>
        <Sources/>
        <NewsGrid/>
        <SignUpPage/>
        <SignUpForm/>
      </div>
    </>
  )
}

export default App