import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion"
function Card({text, hover = false}) {
  return (
    <motion.div whileHover={{backgroundColor: hover?"#7443FF":"#55d34c", padding:'27px'}} className={` ${text? "w-[35%]" : "w-[65%]"} rounded-lg h-96 px-6 py-6 duration-100  bg-[#2d2d35]`}>
        <div className="hoverdiv  h-full flex flex-col justify-between ">
            <div className="upperpart flex flex-col gap-6">
                <div className="firstpart flex items-center justify-between">
                    {text ? <h1>Up Next: News</h1> : <h1>Get In Touch</h1>}
                    <MdOutlineArrowRightAlt />
                </div>
                <div className="secondpart">
                    {text ? <h1 className='text-3xl font-semibold leading-[1.2]'>
                        Insights and behind <br />  the scenes
                    </h1> : <h1 className='text-3xl font-semibold leading-[1.2]'>
                        Let's get to it, <br />  together.
                    </h1>}
                </div>
            </div>
            <div className="lowerpart">
                {text ? <h1 className='text-[#ffffff55]'>Explore what drives our team.</h1>
                 : <div className='flex  flex-col gap-3 '>
                    <h1 className='text-[6.7vw] leading-none font-semibold'>Start a Project</h1>
                    <div className="button w-32 rounded-full  text-center px-5 py-2 border">
                        <h1>Contact us</h1>
                    </div>
                 </div>
                
                }
            </div>
        </div>
    </motion.div>
  )
}

export default Card