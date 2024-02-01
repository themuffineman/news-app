import React, { useContext, useState } from 'react';
import LoginBtn from './LoginBtn';
import CreateBtn from './CreateBtn';
import { UserContext } from '../utils/context';

const SignUpForm: React.FC = () => {
  const [signUp, setSignUp] = useState<boolean>(true);
  const [inputName, setInputName] = useState<string>('');
  const [inputEmail, setInputEmail] = useState<string>('');
  const [inputPassword, setInputPassword] = useState<string>('');

  const userAuth = useContext<any>(UserContext);

  function switchForm(bool: boolean) {
    setSignUp(bool);
  }

  const signupData = {
    name: inputName,
    email: inputEmail,
    password: inputPassword,
  };

  const loginData = {
    email: inputEmail,
    password: inputPassword,
  };

  const createUser = async () => {
    try {
      const signUpResponse = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });
  
      if (!signUpResponse.ok) {
        const errorData = await signUpResponse.json();
        throw new Error(errorData.error || 'User already exists');
      }
  
      const userData = await signUpResponse.json();
      userAuth.setUserData(userData.user);
      window.alert('Account Successfully Created');
      userAuth.setIsLoggedIn(true);
    } catch (error: unknown) {
      console.log(error);
      window.alert(error.message);
    }
  };
  
  const logInUser = async () => {
    try {
      const signInResponse = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  
      if (!signInResponse.ok) {
        const errorData = await signInResponse.json();
        throw new Error(errorData.error || 'Invalid credentials');
      }
  
      const userData = await signInResponse.json();
      userAuth.setUserData(userData.user);
      window.alert('Successfully loggedIn');
      userAuth.setIsLoggedIn(true);
    } catch (error: unknown) {
      console.log(error);
      window.alert(error.message);
    }
  };
  

  const updateInputs = (event: React.ChangeEvent<HTMLInputElement>, inputType: string): void => {
    switch (inputType) {
      case 'name':
        setInputName(event.target.value);
        break;
      case 'email':
        setInputEmail(event.target.value);
        break;
      case 'password':
        setInputPassword(event.target.value);
        break;
      default:
        console.error('Invalid Input Argument');
        break;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); 

    try {
      if (signUp) {
        await createUser();
      } else {
        await logInUser();
      }
      
    } catch (error: unknown) {
      console.error(error);
      window.alert(error.message);
    }
  };

  return (
    <div className='w-max h-max p-3 border rounded-md shadow-md bg-gray-100 flex flex-col justify-between'>
      <div className='flex flex-col justify-between items-center w-96'>
        <div className='flex justify-between items-center w-full'>
          <div
            className='p-2 pl-4 w-40 text-3xl capitalize text-left font-semibold cursor-pointer hover:text-gray-500'
            onClick={() => switchForm(true)}
          >
            sign up
          </div>
          <div
            className='p-2 pr-4 w-40 text-3xl capitalize text-right font-semibold cursor-pointer hover:text-gray-500'
            onClick={() => switchForm(false)}
          >
            login
          </div>
        </div>
        <div className={`h-1 w-36 bg-blue-700 rounded-full ${signUp ? 'self-start' : 'self-end'}`}></div>
      </div>
      <div>
        <form className='flex flex-col gap-5 mt-7' onSubmit={handleSubmit}>
          {signUp && (
            <div className='flex flex-col items-start gap-1 p-1 justify-between'>
              <label htmlFor='name' className='text-lg capitalize font-semibold'>
                Name
              </label>
              <input
                type='text'
                value={inputName}
                placeholder='Enter Full Name'
                onChange={(e) => updateInputs(e, 'name')}
                className='rounded-lg focus:outline-none h-12 pl-2 border bg-slate-50 shadow w-80'
                id='name'
              />
            </div>
          )}

          <div className='flex flex-col items-start gap-1 p-1 justify-between'>
            <label htmlFor='email' className='text-lg capitalize font-semibold'>
              Email
            </label>
            <input
              value={inputEmail}
              onChange={(e) => updateInputs(e, 'email')}
              className='rounded-lg focus:outline-none h-12 pl-2 border bg-slate-50 shadow w-80'
              type='email'
              placeholder='Enter Email Address'
              id='email'
            />
          </div>
          <div className='flex flex-col items-start gap-1 p-1 justify-between'>
            <label htmlFor='password' className='text-lg capitalize font-semibold'>
              Password
            </label>
            <input
              value={inputPassword}
              onChange={(e) => updateInputs(e, 'password')}
              className='rounded-lg focus:outline-none h-12 pl-2 border bg-slate-50 shadow w-80'
              placeholder='Enter Password'
              type='password'
            />
          </div>
          <div className='flex justify-center gap-1 p-1 '>
            {signUp ? <CreateBtn /> : <LoginBtn />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
