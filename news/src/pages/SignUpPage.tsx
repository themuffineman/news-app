import React from 'react'

const SignUpPage:React.FC = () => {
  return (
    <div>
        <h1 className=' text-center italic text-4xl font-mono font-bold capitalize bg-gradient-to-r from-red-500 via-blue-500 to-yellow-500 text-transparent bg-clip-text'>Welcome to <strong>news app,</strong><br></br> your one stop shop  <br></br>for all the latest Articles and News</h1>
        <div className="flex gap-5 justify-center items-center p-2 mt-5">
            <button className='w-56 bg-transparent border-black border-2 rounded-md text-black p-3 hover:bg-black hover:text-white transition-all'>Create An Account</button>
            <button className='w-56 bg-transparent border-black border-2 rounded-md text-black p-3 hover:bg-black hover:text-white transition-all'>Login</button>
        </div>
    </div>
  )
}

export default SignUpPage