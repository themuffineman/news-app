import React from 'react'
import Logo from '../components/Logo'
import SearchBar from '../components/SearchBar'
import Profile from '../components/Profile'

const NavBar: React.FC = () => {
  return (
    <div className='flex justify-between items-center h-max py-0 px-5 shadow w-screen fixed top-0 z-50 bg-slate-50'>

        <div className=' z-[50000rem] w-max p-2 flex gap-8 justify-between items-center'>
            <Logo/>
            <SearchBar/>
        </div>
        <div className='z-[50000rem]  flex justify-end'>
            <Profile/>
        </div>
    </div>
  )
}

export default NavBar