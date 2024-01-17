import React, { ReactNode } from 'react'

  interface TrendingButtonProps {
    onClick?: ()=> any;
    children?: ReactNode;
  }

const TrendingButton:React.FC<TrendingButtonProps> = ({children, onClick}) => {
  return (
        <button onClick={onClick} className='w-40 sm:w-64 h-16 shadow-xl border bg-white rounded-lg active:shadow-none hover:bg-gray-200 active:translate-y-1 font-semibold capitalize z-20' >
            {children}
        </button>
  )
}

export default TrendingButton