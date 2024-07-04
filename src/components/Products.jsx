import React, { useState } from 'react'
import Product from './Product'
import { motion } from "framer-motion"
function Products() {

  var productinfo = [
    {name: "Arqitel" , description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate." , first: true, last: false, color: "#5355EE"},
    {name: "Maniv" , description: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods." , first: true, last: false, color: "#2DCB76"},
    {name: "Singularity" , description: "A new site for Singularity that supports their growth and showcases their true identity as industry innovators." , first: true, last: false, color: "#4C20CF"},
    {name: "Like Magic" , description: "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference." , first: true, last: true,  color: "#4630C4"},
    {name: "Silvr" , description: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand." , first: true, last: true,  color: "#FF7548"},
    {name: "Intenseye" , description: "A brand new website for Intenseye just before their $64M Series." , first: true, last: true, color: "#EC4A18"},
    {name: "Showcase" , description: "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing." , first: true, last: true, color: "#FE9F2E"},
  ]

  var [pos,setPos] = useState(0);
  function mover(val){
    setPos(17 * val);
  }
  return (
    <div className='mt-32 relative'>
        {productinfo.map((elem,index)=>{
            return <Product key={index} mover={mover} color = {elem.color} index={index} name={elem.name} description={elem.description} first={elem.first} last={elem.last}/>  
        })}
        <div  className="windowcontainer h-full w-full absolute top-0 pointer-events-none">
              <motion.div initial={{y:pos, x:"-50%"}} transition = {{duration:0.6, ease:[0.83, 0, 0.17, 1]}} animate={{y:pos+'rem'}}  className="mainwindow h-[17rem] w-[25rem] rounded bg-blue-300 overflow-hidden absolute  left-[46%] ">
                <motion.div animate={{y:-pos+'rem'}} transition = {{duration:0.5, ease:[0.83, 0, 0.17, 1]}} className="windows h-full w-full rounded bg-blue-500  "><video className='h-full w-full object-cover' autoPlay muted loop src='https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm'></video></motion.div>
                <motion.div animate={{y:-pos+'rem'}} transition = {{duration:0.5, ease:[0.83, 0, 0.17, 1]}} className="windows h-full w-full rounded bg-blue-700 "><video className='h-full w-full object-cover' autoPlay muted loop src='https://cdn.refokus.com/website/Maniv-Compressed.mp4'></video></motion.div>
                <motion.div animate={{y:-pos+'rem'}} transition = {{duration:0.5, ease:[0.83, 0, 0.17, 1]}} className="windows h-full w-full rounded bg-red-300 "><video className='h-full w-full object-cover' autoPlay muted loop src='https://cdn.refokus.com/Singularity%20Promo%204_3%202024.webm'></video></motion.div>
                <motion.div animate={{y:-pos+'rem'}} transition = {{duration:0.5, ease:[0.83, 0, 0.17, 1]}} className="windows h-full w-full rounded bg-blue-600 "><video className='h-full w-full object-cover' autoPlay muted loop src='https://cdn.refokus.com/website/2022/videos/weglotlikemagic.webm'></video></motion.div>
                <motion.div animate={{y:-pos+'rem'}} transition = {{duration:0.5, ease:[0.83, 0, 0.17, 1]}} className="windows h-full w-full rounded bg-green-300 "><video className='h-full w-full object-cover' autoPlay muted loop src='https://cdn.refokus.com/website/2022/videos/Silvr.webm'></video></motion.div>
                <motion.div animate={{y:-pos+'rem'}} transition = {{duration:0.5, ease:[0.83, 0, 0.17, 1]}} className="windows h-full w-full rounded bg-blue-300 "><video className='h-full w-full object-cover' autoPlay muted loop src='https://cdn.refokus.com/website/Intenseye_project_video_4_3.webm'></video></motion.div>
                <motion.div animate={{y:-pos+'rem'}} transition = {{duration:0.5, ease:[0.83, 0, 0.17, 1]}} className="windows h-full w-full rounded bg-blue-300 "><video className='h-full w-full object-cover' autoPlay muted loop src='https://cdn.refokus.com/refokus-redesign/showcase_4_3.mp4'></video></motion.div>
              </motion.div>
        </div>
    </div>
  )
}

export default Products