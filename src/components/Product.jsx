import React from 'react'
import Button from './Button'
import { motion } from "framer-motion"
function Product({name,description,first,last,mover,index,color}) {
  const handelmousemove = ()=>{
    mover(index);
  }
  return (
    <motion.div whileHover={{background: color}} onMouseOver={()=>handelmousemove()} className='w-full h-[17rem]'>
        <div className="name h-full max-w-screen-xl mx-auto  px-2 flex items-center justify-between">
            <h1  className='text-6xl'>{name}</h1>
            <div  className="w-[30%] h-full  rightpart flex justify-center flex-col gap-6">
                <p className='leading-[1.2] pr-20 text-lg'>{description}</p>
                <div className="buttons flex items-center gap-4">
                    {first && <Button title='Live Website'/>}
                    {last && <Button title='Case Study'/>}
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Product