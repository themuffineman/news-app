import React from 'react'

const CreateBtn:React.FC = ({createUser}) => {
  return (
    <button onClick={(event)=>createUser(event)} className='w-56 bg-white border-2 active:shadow-none active:translate-y-2 shadow rounded-md text-black p-3 hover:bg-slate-100  transition-all'>Create An Account</button>
  )
}

export default CreateBtn