import React from 'react'

const SignUpForm: React.FC = () => {
  return (
    <div className='w-max h-max p-3 border shadow bg-gray-100 flex flex-col justify-between'>
        <div className='felx felx-col justify-between items-center w-96'>
            <div className='flex justify-between items-center w-96'>
                <div className='p-2 w-40 text-3xl capitalize'>sign up</div> 
                <div className='p-2 w-40 text-3xl capitalize'>login</div>
            </div>
            <div className='h-1 w-40 bg-blue-700 rounded-full self-start'></div>
        </div>
        <div>
            <form action="">
                <div className='flex flex-col items-start gap-1 p-1 justify-between'>
                    <label htmlFor="name" className='text-lg capitalize font-semibold'>Name</label>
                    <input type="text" placeholder='Enter Full Name' className='rounded-lg focus:outline-none h-12 pl-2 border bg-slate-50 shadow w-80' id='name' />
                </div>
                <div className='flex flex-col items-start gap-1 p-1 justify-between'>
                    <label htmlFor="email" className='text-lg capitalize font-semibold'>Email</label>
                    <input className='rounded-lg focus:outline-none h-12 pl-2 border bg-slate-50 shadow w-80' type="email" placeholder='Enter Email Address' id='email' />
                </div>
                <div className='flex flex-col items-start gap-1 p-1 justify-between'>
                    <label htmlFor="password" className='text-lg capitalize font-semibold'>Password</label>
                    <input className='rounded-lg focus:outline-none h-12 pl-2 border bg-slate-50 shadow w-80' placeholder='Enter Password' type="password" />
                </div>
                <div className='flex items-start gap-1 p-1 justify-between'>
                    <button className='w-40 bg-transparent border-black border-2 rounded-md text-black p-3 hover:bg-black hover:text-white transition-all'>Create An Account</button>
                    <button className='w-40 bg-transparent border-black border-2 rounded-md text-black p-3 hover:bg-black hover:text-white transition-all'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUpForm