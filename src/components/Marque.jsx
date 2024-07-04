import React from 'react'
import { motion } from "framer-motion"
function Marque({images, direction}) {
  return (
    <div className='flex w-full items-center  overflow-x-hidden'>
        <motion.div initial= {{x: direction==='left'? 0 : '-100%'}} animate= {{x:direction==='left'?'-100%':'0'}} transition={{ease:"linear",duration: 20, repeat:Infinity}} className="moving flex  shrink-0 items-center gap-28 w-full overflow-hidden">
        {images.map((elem,index) => <img key={index} className=' shrink-0' src={elem} />)}
        </motion.div>
        <motion.div initial= {{x: direction==='left'? 0 : '-100%'}} animate= {{x:direction==='left'?'-100%':'0'}} transition={{ease:"linear",duration: 20, repeat:Infinity}} className="moving flex  shrink-0 items-center gap-28 w-full overflow-hidden">
        {images.map((elem,index) => <img key={index} className=' shrink-0' src={elem} />)}
        </motion.div>
    </div>
  )
}

export default Marque