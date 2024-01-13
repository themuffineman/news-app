import React from 'react'

const Button = ({style, children, onClick}: {style?: string , children?:string, onClick?: () => any }) => {
  return (
    <button onClick={onClick} className ={`${style} w-max h-max p-2 rounded-md shadow-md border active:shadow-none active:translate-y-1`}>
        {children}
    </button>
  )
}

export default Button