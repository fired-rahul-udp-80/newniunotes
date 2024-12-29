import React, { useContext } from 'react'
 
import {Link} from "react-router-dom"

const PlacementLink = () => {
    
  return (
    <div className="flex w-full relative">
        <div className="bg-bgColor absolute left-0 border-r-[5px] border-gray-900 rounded-r-sm px-2 h-10 text-white font-semibold text-center flex items-center justify-center z-10">Latest</div>
        <div className="w-full ">
          <Link to="/pages/placement" className=" w-fit font-sans font-bold marquee h-10 flex justify-center items-center text-nowrap text-blue-700 underline cursor-pointer ">
              <img src="https://ekalyan.cgg.gov.in/images/new_1.gif" alt="" />
              Placement related Material | Notes || Technical Test || Aptitude || Verbal Abilities || Reasoning. 
              <img src="https://ekalyan.cgg.gov.in/images/new_1.gif" alt="" />
          </Link>
        </div>
        <div className="bg-bgColor absolute right-0 border-l-[5px] border-gray-900 rounded-l-sm px-2 h-10 text-white font-semibold text-center flex items-center justify-center z-[100px]">Update</div>
    </div>
  )
}

export default PlacementLink