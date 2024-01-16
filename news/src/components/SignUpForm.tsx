import React, { useState } from 'react'
import LoginBtn from './LoginBtn'
import CreateBtn from './CreateBtn';

const SignUpForm: React.FC = () => {
    const [signUp, setSignUp] = useState<boolean>(true);

    function switchForm(bool:boolean){
        setSignUp(bool)
    }

  return (
    <div className='w-max h-max p-3 border rounded-md shadow-md bg-gray-100 flex flex-col justify-between'>
        <div className='flex flex-col justify-between items-center w-96'>
            <div className='flex justify-between items-center w-full'>
                <div className='p-2 pl-4 w-40 text-3xl capitalize text-left font-semibold cursor-pointer hover:text-gray-500' onClick={()=>switchForm(true)}>sign up</div> 
                <div className='p-2 pr-4 w-40 text-3xl capitalize text-right font-semibold cursor-pointer hover:text-gray-500' onClick={()=>switchForm(false)}>login</div>
            </div>
            <div className={`h-1 w-36 bg-blue-700 rounded-full ${signUp? 'self-start': 'self-end'}`}></div>
        </div>
        <div>
            <form action="" className='flex flex-col gap-5 mt-7'>
                {
                    signUp 
                    && 
                    <div className='flex flex-col items-start gap-1 p-1 justify-between'>
                    <label htmlFor="name" className='text-lg capitalize font-semibold'>Name</label>
                    <input type="text" placeholder='Enter Full Name' className='rounded-lg focus:outline-none h-12 pl-2 border bg-slate-50 shadow w-80' id='name' />
                    </div>
                }
                
                <div className='flex flex-col items-start gap-1 p-1 justify-between'>
                    <label htmlFor="email" className='text-lg capitalize font-semibold'>Email</label>
                    <input className='rounded-lg focus:outline-none h-12 pl-2 border bg-slate-50 shadow w-80' type="email" placeholder='Enter Email Address' id='email' />
                </div>
                <div className='flex flex-col items-start gap-1 p-1 justify-between'>
                    <label htmlFor="password" className='text-lg capitalize font-semibold'>Password</label>
                    <input className='rounded-lg focus:outline-none h-12 pl-2 border bg-slate-50 shadow w-80' placeholder='Enter Password' type="password" />
                </div>
                <div className='flex justify-center gap-1 p-1 '>
                    {signUp? <CreateBtn/>:<LoginBtn/>}
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUpForm