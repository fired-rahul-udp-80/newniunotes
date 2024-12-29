import React, { Component, useContext} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppContext } from "../../context/AppContext";
import { IoStar } from "react-icons/io5";

function FeedbackSlider({data}) {
    const {feedbackFormData} = useContext(AppContext)
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
        {
          breakpoint: 1124,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay:true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
             
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="flex flex-col justify-center mb-10">
      <Slider {...settings}>
         {
            feedbackFormData?.map((data,index) =>{
                
                return (
                  <div key={index} className="container w-full flex justify-center items-center">
                  <div className="drop">
                      <div className="content">
                          <div className="w-[100px] z-30 h-full rounded-full flex items-center justify-center border-[10px] ">
                            <img src={data.profileImage} alt={data.profileImage} className="aspect-square rounded-full object-cover max-w-3/4" />
                          </div>
                          <h2 className="text-xl font-semibold font-titleFont">{data.firstName} {data.lastName}</h2>
                          <p> {data.feedback}</p>
                           
                      </div>
                  </div>
 

                </div>
                )
            })
         }
         
         
      </Slider>

     
    </div>
  );
}

export default FeedbackSlider;
