import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className="footer flex max-w-screen-xl mx-auto">
            <div className="logo flex flex-col justify-between mt-16 py-4 h-72 basis-1/2">
                <h1 className='text-[11.5rem] leading-none font-bold tracking-tight'>refokus.</h1>
                <div className="links flex items-center gap-8 ">
                    {["Privacy Policy", "Cookie Policy", "Impression", "Terms"].map((elem, index)=>{
                        return <a key={index} href="#" className='text-sm text-[#ffffff55]'>{elem}</a>
                    })}
                </div>
            </div>
            <div className="rightpart basis-1/2  flex justify-end">
                    <div className="innerpart flex items-center basis-4/5 flex">
                        <div className="first-part flex gap-10 flex-col items-start basis-[23%]">
                            <h1 className='text-[#ffffff99]'>Social</h1>
                            <div className="links gap-2 flex flex-col">
                                {["Instagram", "Twitter(X?)", "LinkedIn"].map((elem, index) => <a key={index} className='text-sm text-[#ffffff55]'>{elem}</a>)}
                            </div>
                        </div>
                        <div className="second-part flex gap-10 mt-7 flex-col items-start basis-[23%]">
                            <h1 className='text-[#ffffff99]'>Sitemap</h1>
                            <div className="links gap-2 flex flex-col">
                                {["Home", "Work", "Careers","Contact"].map((elem,index) => <a key={index} className='text-sm text-[#ffffffbb]'>{elem}</a>)}
                            </div>
                        </div>
                        <div className="third-part flex gap-7 mt-28 flex-col pl-8 items-end basis-[54%]">
                            <p className='text-right text-md'>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                            <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
                        </div>

                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer