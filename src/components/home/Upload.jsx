import React from 'react'
import { FiUploadCloud } from "react-icons/fi";
import { Link } from 'react-router-dom';
const Upload = () => {
  return (
    <div className="flex md:flex-row flex-col w-full px-5">
         
        <div className="flex flex-col gap-y-5 md:w-[50%] ">
          <div className="text-6xl text-center md:text-start">
            📚
          </div>
          <div className="text-4xl font-semibold font-titleFont">
          Upload Your PDF
          </div>
          <div className="font-semibold text-sm">
          (Every dream will find its destination, just keep moving,
            No matter how tough the paths are, hold on to your courage.)
          </div>
          <div className='font-medium'>
          Click the button to upload your PDF file and customize your cart with ease. Personalize it in just a few steps and make it truly yours!
          </div>
        </div>
        <div className="flex flex-col gap-y-10 justify-center md:w-[50%]">
          <div className="text-center flex flex-col justify-center items-center">
          <FiUploadCloud className=" text-7xl "/>
          <p className="font-medium">Supported Format:.pdf <br/>
          Max File Size: 5MB</p>
          </div>
          <Link to="/pages/upload-notes">
            <div className="flex justify-center">
            <button className="w-[80%] py-5 bg-bgColor rounded-md text-secondaryColor font-titleFont text-xl flex justify-center font-bold items-center hover:opacity-80">
              Upload
            </button>
            </div>
            
             
          </Link>
        </div>
    </div>
  )
}

export default Upload
