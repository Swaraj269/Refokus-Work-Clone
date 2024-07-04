import React from 'react'

function Stripe({src, num, index}) {
  return (
    <>
        <div className={`w-[16.66%] h-16 border-t border-b ${index===5 ? null :"border-r"} px-8 py-4 flex items-center justify-between`}>
            <img className='w-[70%] h-[80%]  ' src={src} alt="" />
            <h1 className='leading-none text-md font-semibold'>{num}</h1>
        </div>
    </>
  )
}

export default Stripe