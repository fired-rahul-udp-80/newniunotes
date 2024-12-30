import React from 'react'
import hero_image from "../../assets/robot_prev_ui.png"
import syllabus from "../../assets/syllabus.pdf"
import waveImg from "../../assets/waveImg.svg"
import academic from "../../assets/Academic-Calendar.pdf"
import holidayList from "../../assets/NiuHoidayList.pdf"
import Notes from './Notes'
import Upload from './Upload'
import MoreFeatures from "./MoreFeatures"
import TypingSection from './TypingSection'
import Contact from './Contact'
import PortfolioLink from './PortfolioLink'
import PlacementLink from "./placement/PlacementLink"
import { FaLocationArrow } from "react-icons/fa";
import {Link} from "react-router-dom"
const Home = ({notesBook}) => {
  return (
    <div className="w-full h-full bg-homeScreen mt-[70px]">
    <div>
        <PlacementLink/>
    </div>
    
        <div className=" h-full flex px-6 relative overflow-hidden items-center font-bodyFont ">
            <div className="w-full max-w-[1360px] h-full mx-auto flex items-center justify-center">
                 
               <div className="w-full z-20 mb-16 mt-4 md:mt-6 rounded-3xl flex flex-col-reverse md:flex-row gap-x-10  items-center bg-gradient-to-bl from-bgColor to-gray-900 md:px-4 py-5 md:py-10 text-white ">
                    <div className="w-full md:w-[75%] flex flex-col gap-y-3 md:gap-y-8 px-5 py-3 md:py-8">
                        <h1 className="text-3xl md:text-5xl font-bold font-serif">NIU Notes</h1>
                        <div className=" font-medium flex flex-col gap-y-1">
                            <div className="text-md md:text-xl">Your Ultimate resources hub for all NIU college materials. Download and share to all.</div>
                            <p className="text-sm md:text-md text-secondaryColor">Notes | Previous Year Question Paper | Placement Notes | Academic Calendar | Syllabus | Practical</p>
                            <div className="text-xs md:text-sm font-titleFont text-blue-400 font-semibold">"Study while others are sleeping; work while others are loafing; prepare while others are playing; and dream while others are wishing." – William Arthur Ward</div>
                            <div className="flex flex-col lg:flex-row gap-y-3 gap-x-3 md:gap-x-6 mt-5 text-xs h-fit">
                                <div className="flex gap-x-3 md:gap-x-6">
                                <a href={syllabus} target="_blank" className="px-4  md:px-6 py-3 md:py-5 md:w-auto text-center md:text-lg bg-bgColor text-secondaryColor font-bold font-titleFont rounded-md cursor-pointer hover:opacity-80 ">Syllabus</a>
                                <a href={holidayList} target="_blank" className="px-4 md:px-6 py-3 md:py-5 md:w-auto md:text-lg text-center bg-bgColor text-secondaryColor font-bold font-titleFont rounded-md cursor-pointer hover:opacity-80 ">Holiday List</a>
                                </div>
                                
                                <a href={academic} target="_blank" className="px-4 md:px-6 py-3 md:py-5 w-[70%] text-center md:text-lg bg-bgColor text-secondaryColor font-bold rounded-md font-titleFont cursor-pointer hover:opacity-80 ">Academic Calendar</a>
                            </div>
                        </div>
                    </div>
                    <div className='h-fit w-fit flex flex-col items-center gap-y-1 md:gap-y-3 px-5 md:px-6 py-6 md:py-10 border-[1px] border-red-800 rounded-3xl'>
                        <span className="text-3xl md:text-6xl">📚</span>
                        <div className="text-lg md:text-3xl nav-part2 font-semibold font-titleFont ">NIU Notes</div>
                    </div>
                </div>
            </div>
            <div className="z-30">
            <div className="box0 w-[80px] h-[80px]  absolute -bottom-100 left-[0%] rounded-lg "></div>
            <div className="box1 w-[80px] h-[80px] absolute -bottom-100 left-[10%] rounded-lg "></div>
            <div className="box2 w-[80px] h-[80px]  absolute -bottom-100 left-[20%] rounded-lg"></div>
            <div className="box3 w-[80px] h-[80px]  absolute -bottom-100 left-[30%] rounded-lg"></div>
            <div className="box4 w-[80px] h-[80px]  absolute -bottom-100 left-[40%] rounded-lg"></div>
            <div className="box5 w-[80px] h-[80px]  absolute -bottom-100 left-[50%] rounded-lg"></div>
            <div className="box6 w-[80px] h-[80px] absolute -bottom-100 left-[60%] rounded-lg"></div>
            <div className="box7 w-[80px] h-[80px]  absolute -bottom-100 left-[70%] rounded-lg"></div>
            <div className="box8 w-[80px] h-[80px]  absolute -bottom-100 left-[80%] rounded-lg"></div>
            <div className="box9 w-[80px] h-[80px]  absolute -bottom-100 left-[90%] rounded-lg"></div>
            <div className="box10 w-[80px] h-[80px] absolute -bottom-100 left-[100%] rounded-lg"></div>
            </div>
            {/* gradient box */}
            <div className="z-10 absolute -left-[150px] -bottom-[50px] gradient-box bg-gradient-to-b from-blue-400 to-pink-500 shadow-richblue-400 blur-xl">

             </div>
            {/* placement link */}
            <div className="fixed right-5 bottom-10   z-20 animate-bounce">
                <Link to="/pages/placement" >
                    <div className=" bg-bgColor px-4 py-4 rounded-full text-white text-md -rotate-90 ">
                    <FaLocationArrow />
                    </div>
                </Link>
            </div>
            <div className=" absolute left-0 bottom-0 w-screen">
                <img src={waveImg} alt={waveImg} loading="lazy"  className="wave-img w-full"/>
            </div>
        </div>
        
            <div >
                <Notes notesBook={notesBook} />
            </div>
            <div>
                <MoreFeatures/>
            </div>
            <div className="max-w-[1160px] mx-auto flex flex-col gap-y-20 relative">
              <div>
                <TypingSection
                     codeBlock =           
                      {`  <!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n<body><h1><a href="/heading">Heading</a></h1>\n<nav><a href="one/">One</a> <a href="/two">Two</a><a href="/two">Two</a>\n<a href="https://niu.edu.in">https://niu.edu.in</a>\n</nav>\n</body>`}
                        codeColor={"text-black-900"}

                />
            </div>
            <div>
                <Upload/>
            </div>
            {/* background gradient -color */}
            <div className="absolute -right-[300px] bottom-80 gradient-box bg-gradient-to-b from-blue-400 to-pink-500 shadow-richblue-400 blur-xl">

             </div>
             <div>
                <PortfolioLink/>
             </div>
        </div>
        <div>
            <Contact path ="/contact"  />
        </div>
    </div>
  )
}

export default Home
