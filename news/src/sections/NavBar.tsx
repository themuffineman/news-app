import React from 'react'
import Logo from '../components/Logo'
import SearchBar from '../components/SearchBar'
import Profile from '../components/Profile'


const NavBar: React.FC = () => {
  return (
    <div className='flex justify-around sm:justify-between items-center h-max py-0 px-5 shadow w-[100%] right-0 fixed top-0 z-50 bg-slate-50'>

        <div className=' w-max p-2 flex gap-2 sm:gap-8 justify-between items-center'>
            <div className=''><a href='/'><Logo/></a></div>
            <SearchBar/>
        </div>
        <div>
            <Profile/>
        </div>
        
    </div>
  )
}

export default NavBar