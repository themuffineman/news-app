import React from 'react'
import SignUpForm from '../components/SignUpForm'

const SignUpPage:React.FC = () => {
  
  return (
    <div className='flex flex-col gap-20 p-2 items-center justify-between'>
        <h1 className=' text-center italic text-4xl font-mono font-bold capitalize bg-gradient-to-r from-red-500 via-blue-500 to-yellow-500 text-transparent bg-clip-text'>Welcome to <strong>news app,</strong><br></br> your one stop shop  <br></br>for all the latest Articles and News</h1>
        <SignUpForm/>
    </div>
  )
}

export default SignUpPage