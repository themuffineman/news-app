import React from 'react'
import { DropdownLinks } from '../utils/types'

const ProfileDropDown: React.FC<{links: DropdownLinks[]}> = ({links}) => {
  return (
    <>
       <div className='absolute z-10 left-1/2 top-[2] mt-2 rounded-md border -translate-x-1/2 shadow-lg max-w-max-content py-2 h-max  flex-col bg-slate-50 '>
            {links.map((link:any)=>(

            <div className=' flex items-center gap-2 w-40 h-max p-2 hover:bg-gray-100 cursor-pointer'>
                <span onClick={link.onClick}>{link.name}</span>
            </div>

            ))}
        </div>
    </>
  )
}

export default ProfileDropDown