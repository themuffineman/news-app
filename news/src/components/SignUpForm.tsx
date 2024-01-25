import React, { useContext, useState } from 'react'
import LoginBtn from './LoginBtn'
import CreateBtn from './CreateBtn';
import axios from 'axios';
import { UserContext } from '../utils/context';

const SignUpForm: React.FC = () => {
    const [signUp, setSignUp] = useState<boolean>(true);
    const [inputName, setInputName] = useState<string>('')
    const [inputEmail, setInputEmail] = useState<string>('')
    const [inputPassword, setInputPassword] = useState<string>('')

    const userAuth = useContext(UserContext)

    function switchForm(bool:boolean){
        setSignUp(bool)
    }

    const signupData = {
        name: inputName,
        email: inputEmail,
        password: inputPassword
    }

    const loginData = {
        email: inputEmail,
        password: inputPassword
    }

    const createUser= async ()=>{

        try{
            const signUpResponse = axios.post('http://localhost:3000/signup', signupData)
            
            if (!signUpResponse.ok) {
                throw new Error(signUpResponse.error || 'User already exists');
            }
        
            userAuth.setUserData(signUpResponse.user);
            userAuth.setIsLoggedIn(true)

        }catch(error){
            console.log(error) 
            window.alert(error)
        }
        
    }

    const logInUser = async ()=> {

        try{
            const signInResponse = axios.post('http://localhost:3000/signup', loginData)

            if (!signInResponse.ok) {
                throw new Error(signInResponse.error || 'User already exists');
            }
        
            userAuth.setUserData(signInResponse.user);

        }catch(error){
            console.log(error) 
            window.alert(error)
        }
            
    }

    const updateInputs = (event: React.MouseEvent, inputType: string): void => {
        switch (inputType) {
            case 'name':
                setInputName((event.target as HTMLInputElement).value);
                break;
            case 'email':
                setInputEmail((event.target as HTMLInputElement).value);
                break;
            case 'password':
                setInputPassword((event.target as HTMLInputElement).value);
                break;
            default:
                console.error('Invalid Input Argument')
                break;

        }
    };
    
    

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
                    <input type="text" value={inputName} placeholder='Enter Full Name' onChange={(e)=> updateInputs(e, 'name')} className='rounded-lg focus:outline-none h-12 pl-2 border bg-slate-50 shadow w-80' id='name' />
                    </div>
                }
                
                <div className='flex flex-col items-start gap-1 p-1 justify-between'>
                    <label htmlFor="email" className='text-lg capitalize font-semibold'>Email</label>
                    <input value={inputEmail} onChange={(e)=> updateInputs(e, 'email')} className='rounded-lg focus:outline-none h-12 pl-2 border bg-slate-50 shadow w-80' type="email" placeholder='Enter Email Address' id='email' />
                </div>
                <div className='flex flex-col items-start gap-1 p-1 justify-between'>
                    <label htmlFor="password" className='text-lg capitalize font-semibold'>Password</label>
                    <input value={inputPassword} onChange={(e)=> updateInputs(e, 'password')} className='rounded-lg focus:outline-none h-12 pl-2 border bg-slate-50 shadow w-80' placeholder='Enter Password' type="password" />
                </div>
                <div className='flex justify-center gap-1 p-1 '>
                    {signUp? <CreateBtn CreateUser={createUser}/> : <LoginBtn loginUser={logInUser}/> }
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUpForm