import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import AnchorTag from '../template/AnchorTag'
const TypingSection = ({codeBlock, codeColor}) => {
  return (
    <div className="w-full flex md:flex-row flex-col gap-10 py-5 gap-x-10 justify-between px-5">
        <div className="w-full md:w-[50%] flex flex-col gap-y-10 justify-center">
             
            <div className="flex md:flex-row flex-col gap-y-8 gap-x-10">
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
        <div className=" py-5 bg-blue-100 md:w-[50%] md:max-w-[500px] flex relative z-[10]">
            {/* background gradient -color */}
            <div className="absolute left-20 gradient-box bg-gradient-to-b from-purple-700 to-pink-500 shadow-richblue-400 blur-2xl">

             </div>
            <div className="text-center flex flex-col w-[10%] text-gray-700 font-inter font-bold">
                    <>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                    <span>11</span>
                    <span>12</span>
                    <span>13</span>
                     
                    </>
                </div>

                <div className={`w-[90%] flex flex-col z-50 gap-3 font-bold  ${codeColor} pr-2`}>
                    <TypeAnimation
                       sequence={[codeBlock, 2000, ""]}
                       repeat = {Infinity}
                       cursor = {true}
                       omitDeletionAnimation={true}

                       style = {
                        {
                            whiteSpace:"pre-line",
                            display:"block",
                        }
                       }
                    />
                </div>
        </div>
    </div>
  )
}

export default TypingSection
