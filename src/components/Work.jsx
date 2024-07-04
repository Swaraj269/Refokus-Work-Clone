import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"


function Work() {

    
    var [images,setImages] = useState([
        {src:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top:"50%", left:"50%", isActive: false},
        {src:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top:"54%", left:"47%", isActive: false},
        {src:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top:"40%", left:"54%", isActive: false},
        {src:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top:"60%", left:"50%", isActive: false},
        {src:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top:"53%", left:"57%", isActive: false},
        {src:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top:"63%", left:"48%", isActive: false},
    ])

    const { scrollYProgress } = useScroll();

    function showImages(arr){
        setImages(prev => 
            prev.map((elem,index)=> (arr.indexOf(index)=== -1 ? {...elem, isActive : false }: {...elem, isActive : true }) )
        )
    }

    

    scrollYProgress.on("change", data => {
        
        switch(Math.floor(data*100)){
            case 0: 
                showImages([]);
                break;
            case 1: 
                showImages([0]);
                break;
            case 3: 
                showImages([0,1]);
                break;
            case 4: 
                showImages([0,1,2]);
                break;
            case 5: 
                showImages([0,1,2,3]);
                break;
            case 6: 
                showImages([0,1,2,3,4]);
                break;
            case 8: 
                showImages([0,1,2,3,4,5]);
                break;
            default: 
                break;
        }
    })
    
  return (
    <div className='w-full mt-6 '>
        <div className="work max-w-screen-lg  mx-auto relative">
            <h1 className='text-[31vw] select-none leading-none font-medium text-center tracking-tight'>work</h1>
            <div className="imagess top-0 absolute h-full w-full">
                {images.map((elem)=> {
                    return elem.isActive && <img  src={elem.src} className=' absolute w-60 -translate-x-1/2 -translate-y-1/2 rounded-lg' style={{top:elem.top, left:elem.left}} alt="" />
                } )}
            </div>
        </div>
    </div>
  )
}

export default Work