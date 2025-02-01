import React from 'react'
import {Link} from "react-router-dom"
const MoreFeatures = () => {
  return (
    <div>
        <div className="w-full flex md:flex-row flex-col p-10 py-16 items-center justify-center gap-20 z-10 md:bg-gradient-to-r bg-gradient-to-b from-bgColor to-gray-900">
                    <div className="relative p-10 md:w-[40%] border-[1px] rounded-2xl flex flex-col gap-y-5 hover:scale-[0.95] duration-300">
                        <div className="absolute top-0 -right-5 bg-white px-4 py-1 font-bold rounded animate-bounce ">New</div>
                        <h2 className="text-white font-semibold text-xl md:text-2xl">Makes your notes online and send to your mail...</h2>
                        <a href="http://makenotespdf.online" target="_blank" className="bg-gray-900 border-[1px] border-bgColor w-fit rounded-md px-10 py-4 text-white font-semibold">Go To</a>
                    </div>
                    <div className="relative p-10 md:w-[40%]  border-[3px] border-bgColor rounded-2xl flex flex-col gap-y-4 hover:scale-[0.95] duration-300">
                        <div className="absolute top-0 -right-5 bg-white px-4 py-1 font-bold rounded animate-bounce ">New</div>
                        <h2 className="text-white font-semibold text-xl md:text-2xl">Make your frontend developer journey by making free API...</h2>
                        <p className="text-secondaryColor -mt-3 font-semibold">Used in your project</p>
                        <a href="https://makeyourapi.netlify.app/" target="_blank" className="bg-gray-900 border-[1px] border-bgColor w-fit rounded-md px-10 py-4 text-white font-semibold hover:opacity-70">Go Toe</a>
                    </div>
                    
        </div>
    </div>
  )
}

export default MoreFeatures
