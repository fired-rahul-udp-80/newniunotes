import React from 'react'
import { SiOpenlayers } from "react-icons/si";
import Contact from '../home/Contact';
import ShortDes from "./ShortDes"
 
import Title from '../template/Title';
const AboutPage = () => {
  return (
    <div className="mt-[70px]">
       <Title
          title = "About Us"
          icon = {<SiOpenlayers/>}
       />
       <div className="max-w-[1360px] mx-auto flex flex-col py-5 gap-y-5 px-5">
        <div className="text-xl font-semibold font-md">
              Welcome to <span className="text-bgColor font-bold">Ninunotes.store</span> , your one-stop solution for smart, efficient, and innovative note management!

              At Niunotes, we believe in simplifying the way you organize, create, and share knowledge. Whether you're a student, professional, or a lifelong learner, our platform is designed to empower you to manage your notes with ease and convenience.
        </div>
        <div>
          <ShortDes
            list = {""}
            title ="Mission"
            desc0 = "Our mission is to revolutionize the way people handle their notes. We aim to provide tools and resources that not only save time but also enhance productivity. With a focus on user-friendly interfaces and powerful functionality, we strive to make note management a seamless experience."
          
          />
        </div>
        <div>
          <ShortDes
              list = {"square"}
              title = "What We Offer"
              desc1 = "Digital Note Management: Create, edit, and organize your notes effortlessly in one place."
              desc2 = "PDF Conversion: Transform your notes into professionally formatted PDFs for easy sharing and storage."
              desc3 = "Cloud Sync: Securely store your notes and access them anytime, anywhere."
              desc4 = "Customizable Features: Personalize your note-taking experience with themes, layouts, and more."
              desc5 = "Collaboration: Share your notes and collaborate with others in real time."
          />
        </div>
        <div>
          <ShortDes
            list = {"square"}
            title = "Why Choose Niunotes?"
            desc1 = "Ease of Use: Designed with simplicity and efficiency in mind."
            desc2 = "Reliability: A secure and trustworthy platform for all your note-keeping needs."
            desc3 = "Innovation: Regular updates to introduce new features and improve your experience."
            desc4 = "Community-Driven: We listen to your feedback and grow with your support."
            desc5 = ""
          />
          <ShortDes
            list = {""}
            title = "Our Vision"
            desc1 = "To be a global leader in digital note management, fostering creativity and organization for individuals and teams alike."
            desc2 = 'Thank you for choosing Niunotes.store. Join us on our journey to redefine note management and make every idea count!'
          />


        </div>
       </div>
        <div>
            <Contact path ="/contact"  />
        </div>
    </div>
  )
}

export default AboutPage
