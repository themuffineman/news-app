import React, { useState, useEffect, useRef } from 'react'
import ProfileDropDown from './ProfileDropDown'
import { dropdownLinks } from '../utils/dropdownLinks';

const Profile: React.FC<{Username: string}> = ({Username}) => {
    
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleOutsideClick = (event : MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        }
    };

    useEffect(() => {
        
        document.addEventListener('click', handleOutsideClick);

        
        return () => {
        document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

  return (
    <div ref={dropdownRef} className='relative w-max'>
    <div onClick={toggleDropdown}>
        <div className='hidden md:flex items-center justify-between w-max px-2 py-1 rounded-md shadow cursor-pointer hover:bg-slate-50  '>
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-9 h-9 fill-gray-300" viewBox="0 0 512 512"><path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"/><path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"/></svg>
            <span className='flex items-center gap-1 justify-between w-max p-2 '>
            <p className='text-sm'>Hello, {Username}</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-4 h-4 fill-gray-100 " viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M112 184l144 144 144-144"/></svg>
            </span>
        </div>

        <div className=' md:hidden justify-end '>
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon w-10 h-10 " viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 160h352M80 256h352M80 352h352"/></svg>
        </div>
    </div>
       {isOpen && (<ProfileDropDown links={dropdownLinks}/>)}
    </div>
  )
}

export default Profile