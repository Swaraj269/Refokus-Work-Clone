import React from 'react'
import Button from './Button'
function Nav() {
  return (
    <div className='max-w-screen-lg mx-auto border-b border-[#ffffff44] py-5 flex items-center justify-between'>
        <div className="leftnav flex items-center gap-28">
            <div className="image flex items-center">
                <img  src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
            </div>
            <div className="menu flex items-center gap-10">
                {["Home","Work","About", "", "News"].map((elem,index) => (
                    elem.length === 0 ? (<span key={index} className="inline-block w-0.5 h-10 bg-[#ffffff44]" ></span>):
                    <a key={index}  className='flex text-sm items-center gap-1'>{index===1 ? (<span style={{boxShadow: "0 0 0.5em #00FF19"}} className='inline-block h-1 w-1 rounded-full bg-[#00FF19]'></span>): null}{elem}</a>))}
            </div>
        </div>
        <div className="rightnav flex items-center">
            <Button/>
        </div>
    </div>
  )
}

export default Nav