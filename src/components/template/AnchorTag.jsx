import React from 'react'

const AnchorTag = ({text, linkto, active}) => {
  return (
    <div className="w-full">
        <a href={linkto} target="_blank" className={`flex justify-center px-8 py-4 text-white font-semibold font-titleFont rounded hover:opacity-90 text-md ${active ? "bg-bgColor border-[1px] border-black":"bg-gray-900 border-[1px] border-bgColor" } `}>{text}</a>
    </div> 
  )
}

export default AnchorTag