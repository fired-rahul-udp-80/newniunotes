import React, { useContext } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';


const Card = ({branch, semester, set, btn,icon,getData}) => {
  const {setPrivateRoute} = useContext(AppContext);
  const naviagate = useNavigate();
  function getPrevQuest(){
    getData();
    setPrivateRoute(true);
    naviagate("previous-year-question-paper");

  }
  return (
    
      <div className="w-full md:w-[350px] px-10 md:px-0">
          <div className="w-full  p-10 text-primaryColor border-t-[10px] border-t-bgColor hover:shadow-2xl border-t-[15px] shadow-lg border-l-[12px] hover:shadow-white-200 transition-all duration-200 font-bodyFont  rounded-md flex flex-col gap-y-4 justify-center">
            <span  className="text-5xl text-center flex text-bgColor">{icon}</span>
            <p className="text-2xl font-semibold">{branch}</p>
            <p className="text-xl font-medium ">{semester}</p>
            <p className="text-xl font-medium">{set}</p>
            <div onClick={getPrevQuest}
            className="flex  items-center mt-3 justify-center px-4 py-3 bg-bgColor cursor-pointer hover:opacity-80 hover:text-boxColor max-w-[50%] text-center text-secondaryColor font-titleFont font-bold rounded-md">
              <button 
               className="">{btn}</button>
              <IoIosArrowForward />
            </div>
            

          </div>
      </div>
    
  )
}

export default Card