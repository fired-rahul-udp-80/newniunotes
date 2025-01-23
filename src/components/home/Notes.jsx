import React, {  useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Year2Notes from './Year2Notes';
import Year3Notes from './Year3Notes'
import Year4Notes from './Year4Notes'
import Year1Notes from "./Year1Notes"
import FinalProject from './FinalProject';


const Notes = () => {
      
    const {notesBook1} = useContext(AppContext);
    const [semester1Details , setSemester1Details] = useState(false);
    const [semester2Details , setSemester2Details] = useState(true);
    const [semester3Details , setSemester3Details] = useState(false);
    const [semester4Details , setSemester4Details] = useState(false);
    const [finalYearProject , setFinalYearProject] = useState(false);

    


  return (
    <div>
        <div className="mb-10">
            <ul className="flex font-semibold md:text-xl shadow-xl overflow-x-scroll no-scrollbar border-b-[10px] border-red-200" >
                    <li onClick={() =>setSemester1Details(true) & setSemester2Details(false) & setSemester3Details(false) & setSemester4Details(false) & setFinalYearProject(false)}
                     className={`px-6 md:px-10 py-5 bg-bgColor text-secondaryColor font-titleFont hover:bg-boxBg hover:opacity-90 hover:text-opacity-70 cursor-pointer text-center w-full
                     ${semester1Details ? "opacity-90 bg-boxBg text-opacity-70":""} transition-all duration-200`} >1 <sup>st </sup>Year
                    </li>
                    <li onClick={() =>setSemester1Details(false) & setSemester2Details(true) & setSemester3Details(false) & setSemester4Details(false) & setFinalYearProject(false)}
                     className={`px-6 md:px-10 py-5 bg-bgColor text-secondaryColor font-titleFont hover:bg-boxBg hover:opacity-90 hover:text-opacity-70 cursor-pointer text-center w-full
                     ${semester2Details ? "opacity-90 bg-boxBg text-opacity-70":""} transition-all duration-200`} >2 <sup>nd </sup>Year
                    </li>
                    <li onClick={() =>setSemester1Details(false) & setSemester2Details(false) & setSemester3Details(true) & setSemester4Details(false) & setFinalYearProject(false)}
                     className={`px-6 md:px-10 py-5 bg-bgColor text-secondaryColor font-titleFont hover:bg-boxBg hover:opacity-90 hover:text-opacity-70 cursor-pointer text-center w-full
                     ${semester3Details ? "opacity-90 bg-boxBg text-opacity-70":""}transition-all duration-200`} >3<sup>rd </sup>Year</li>
                    <li onClick={() =>setSemester1Details(false) & setSemester2Details(false) & setSemester3Details(false) & setSemester4Details(true) & setFinalYearProject(false)}
                    className={`px-6 md:px-10 py-5 bg-bgColor text-secondaryColor font-titleFont hover:bg-boxBg hover:opacity-90 hover:text-opacity-70  cursor-pointer text-center w-full
                        ${semester4Details ? "opacity-90 bg-boxBg text-opacity-70":""}transition-all duration-200`} >4<sup>th </sup>Year</li>
                    <li onClick={() =>setSemester1Details(false) & setSemester2Details(false) & setSemester3Details(false) & setSemester4Details(false) & setFinalYearProject(true)} 
                    className={`px-6 md:px-10 py-5 bg-bgColor text-secondaryColor font-titleFont hover:bg-boxBg hover:opacity-90 hover:text-opacity-70 cursor-pointer text-center w-full  
                        ${finalYearProject ? "opacity-90 bg-boxBg text-opacity-70":""}transition-all duration-200` } >Final Year Project</li>
                
                    
                
            </ul>
            <div className="flex flex-col justify-center items-center h-full w-full">
                
                {
                  semester1Details && <Year1Notes notesBook1={notesBook1}/>
                }
                {
                  semester2Details && <Year2Notes notesBook1={notesBook1}/>
                }
                {
                    semester3Details && <Year3Notes notesBook1={notesBook1} />
                }
                {
                    semester4Details && <Year4Notes notesBook1={notesBook1} />
                }
                {
                    finalYearProject &&  <FinalProject notesBook1={notesBook1} />
                }
                 
                
            </div>
        </div>
    </div>
  )
}

export default Notes
