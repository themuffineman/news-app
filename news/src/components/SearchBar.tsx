import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState()
  const navigate = useNavigate()

  function handleInput(e: any){
    setSearchInput(e.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
   navigate(`search/${searchInput}`);
  };

  return (
    <div className=' flex gap-1 shadow rounded-md py-2 pl-2 items-center justify-between bg-gray-50 h-12 outline-1' >
        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-6 h-6 fill-gray-300 " viewBox="0 0 512 512"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"/></svg>
        <form onSubmit={handleSubmit} className='w-full h-12 justify-end flex'>
        <input type="search" value={searchInput} onChange={(e)=> handleInput(e)} placeholder='Search News, Articles and Sources' className=' w-20 ss:w-24 xs:w-48 sm:w-72 md:w-96 p-1 px-4 focus:outline-none rounded-lg bg-gray-50' />
        <button className='justify-end hidden sm:block font-semibold rounded-r-md w-max h-full p-2 bg-gray-200 border-l-1 text-black' > Search </button>
        </form>
    </div>
  )
}

export default SearchBar