import React from 'react'

const AnchorTag = ({text, linkto, active}) => {
  return (
    <div className="w-full">
        <a href={linkto} target="_blank" className={`flex justify-center px-8 py-4 text-white font-semibold font-titleFont rounded hover:opacity-90 text-md ${active ? "bg-bgColor border-b-[7px] border-r-[7px] border-red-950":"bg-gray-800 border-b-[7px] border-r-[7px] border-gray-900" } `}>{text}</a>
    </div> 
  )
}

export default AnchorTag
