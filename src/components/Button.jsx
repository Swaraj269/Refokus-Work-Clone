import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title = "Start a Project"}) {
  return (
    <div className='px-6 py-2 text-[#000] rounded-full bg-white flex items-center justify-center gap-3'>
        <h1 className='text-sm font-normal'>{title}</h1>
        <div className="buttonicon h-4 flex items-end">
            <IoIosReturnRight className='text-sm font-bold' />
        </div>
    </div>
  )
}

export default Button