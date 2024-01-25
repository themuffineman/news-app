import React from 'react'

const LoginBtn:React.FC = ({logInUser}) => {
  return (
    <button onClick={logInUser} className='w-56 bg-white active:shadow-none active:translate-y-2 border-2 shadow rounded-md text-black p-3 hover:bg-slate-100  transition-all'>Login</button>
  )
}

export default LoginBtn
