import React, { useContext } from 'react'
import Title from '../../template/Title'
import { MdFileOpen } from "react-icons/md";
import AnchorTag from '../../template/AnchorTag';
import { AppContext } from '../../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const PlacementPages = () => {
    const {subNotes, getPlacementCell,setPrivateRoute } = useContext(AppContext);
    const navigate = useNavigate();
    const getPlacementNotes = (param)=>{
       // console.log(param);
       setPrivateRoute(true);
       getPlacementCell();
        if (param) {
            navigate('/pages/placement/placement-notes', { state: { item: param } });
            
        }

    }
  return (
    <div className="mt-[70px]">
        <Title  title="Placement Cell" icon={<MdFileOpen/>} />

        <div className="max-w-[1360px] mx-auto px-10 flex flex-col gap-y-10 py-10">
            <div className="">
                <div className="grid grid-r  md:grid-cols-2 gap-x-5 gap-y-5 md:place-items-center">
                    <div onClick={() =>{getPlacementNotes("Aptitude")}} className="py-4 px-10 font-semibold bg-gradient-to-br from-bgColor to-gray-900 text-white md:w-[80%] rounded hover:opacity-90 text-center">Aptitude</div>
                    <div onClick={() =>{getPlacementNotes("Technical Round")}} className="py-4 px-10 font-semibold bg-gradient-to-br from-bgColor to-gray-900 text-white md:w-[80%] rounded hover:opacity-90 text-center">Technical Round</div>
                    <div onClick={() =>{getPlacementNotes("Verbal Ability")}} className="py-4 px-10 font-semibold bg-gradient-to-br from-bgColor to-gray-900 text-white md:w-[80%] rounded hover:opacity-90 text-center">Verbal Ability</div>
                    <div onClick={() =>{getPlacementNotes("Reasoning")}} className="py-4 px-10 font-semibold bg-gradient-to-br from-bgColor to-gray-900 text-white md:w-[80%] rounded hover:opacity-90 text-center">Reasoning</div>
                </div>
            </div>
            <div className="w-full bg-bgColor text-secondaryColor font-bold flex justify-center py-4 rounded-md shadow-lg text-xl">Others Link</div>
            <div className="w-full flex flex-col gap-y-10 justify-center items-center">
                
                <div className="w-full flex md:flex-row flex-col gap-y-8 gap-x-10">
                    <div className='flex gap-x-5 md:w-[50%] w-full'>
                        <div className="vertical-text px-2 border-[1px] font-medium rounded border-bgColor flex items-center justify-center font-titleFont w-[10%]">Technical</div>
                        <div className="flex flex-col gap-y-5 w-full">
                            <AnchorTag text="Leet Code" linkto="https://www.leetcode.com/" active={false} />
                            <AnchorTag text="Hacker Rank" linkto="https://www.hackerrank.com/" active={false} />
                            <AnchorTag text="Code Chef" linkto="https://www.codechef.com" active={false} />
                            <AnchorTag text="GeeksForGeeks" linkto="https://www.geeksforgeeks.org/" active={false} />
                            <AnchorTag text="Coding Ninga" linkto="https://www.codingninjas.com/" active={false} />
                        </div>
                    </div>
                    
                    <div className="flex gap-x-5 md:w-[50%] w-full">
                        <div className="vertical-text px-2 border-[1px] rounded border-bgColor flex items-center justify-center font-titleFont w-[10%]">Aptitude</div>
    
                        <div className="flex flex-col gap-y-5 w-full">
                            <AnchorTag text="India Bix" linkto="https://www.indiabix.com/" active="true" />
                            
                            <AnchorTag text="Prep Insta" linkto="https://prepinsta.com/" active="true" />
                            <AnchorTag text="Face Prep" linkto="https://faceprep.facecampus.org/" active="true" />
                            <AnchorTag text="Hitbullseye" linkto="https://www.hitbullseye.com/" active="true" />
                            
                        </div>
                    </div>
                </div>
            
            </div>
        </div>



    </div>
  )
}

export default PlacementPages