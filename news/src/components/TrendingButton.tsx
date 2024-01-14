import React from 'react'

const TrendingButton = ({children, onClick}: {children?: string, onClick?: ()=> any}) => {
  return (
        <button onClick={onClick} className='w-64 h-16 shadow-xl border bg-white rounded-lg active:shadow-none hover:bg-gray-200 active:translate-y-1 font-semibold capitalize z-50' >
            {children}
        </button>
  )
}

export default TrendingButton