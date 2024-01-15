import React from 'react'

const Button: React.FC<{
  style?: string , 
  children?:React.ReactNode , 
  onClick?: () => any 
  }> = ({style, children, onClick}) => {
  return (
    <button onClick={onClick} className ={`${style} w-max h-max p-2 rounded-md shadow-md border active:shadow-none hover:bg-gray-50 active:translate-y-1`}>
        {children}
    </button>
  )
}

export default Button