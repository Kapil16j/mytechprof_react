import React from "react";
// import { ourCourses } from "../common/helper";
import { useNavigate } from "react-router-dom";

import Frontenddeveloper from "../../assets/img/courses/frontenddeveloper-img.png"
import Backenddeveloper from "../../assets/img/courses/back-end.png"
import Uiux from "../../assets/img/courses/ui-ux.png"
import Appdeveloper from "../../assets/img/courses/app-developer.png"

const CoursesList = () => {
  const router = useNavigate();


  const ourCourses = [
    {
      img: Frontenddeveloper,
      courses: "Front End Development",
      link: "/course/frontend",
      desc: "My Tech Professionals offers comprehensive front-end developer courses designed to equip individuals with the skills and knowledge necessary to excel in the rapidly evolving field of web development. Our courses are crafted by industry experts and cover the latest front-end technologies and best practices.",
    },
    {
      img: Backenddeveloper,
      courses: "Back End Development",
      link: "/course/backend",
    
      desc: "My Tech Professionals offers comprehensive back-end development courses that empower individuals with the skills and expertise needed to excel in the dynamic field of web development. Our courses are designed by industry professionals and cover a wide range of back-end technologies and concepts. In our back-end development courses, participants will dive deep into server-side programming languages such as Python, Ruby, or Node.js. They will learn how to design and implement robust back-end architectures, handle data storage and retrieval, and build secure and scalable web applications.",
    },
    {
      img: Uiux,
      courses: "UI/UX Designing",
      link: "/course/ui-ux",
    
      desc: "My Tech Professionals offers comprehensive UI/UX designing courses designed to equip individuals with the skills and knowledge necessary to excel in the field of user experience and user interface design. Our courses are crafted by industry experts and cover the latest design principles, tools, and techniques. They will gain a deep understanding of user research methodologies, information architecture, wireframing, prototyping, and usability testing. Through hands-on projects and practical exercises, students will apply these concepts to design user-centered interfaces for websites, applications, and other digital products.",
    },
    {
      img: Appdeveloper,
      courses: "App Development",
      link: "/course/mobile-app",
    
      desc: "Master the Art of App Development with My Tech Professionals , Are you ready to embark on a journey to become a skilled app developer? My Tech Professionals offers comprehensive app development courses designed to equip you with the knowledge and skills needed to create innovative and high-quality mobile applications. Whether you're a beginner or an experienced programmer, our courses cater to all skill levels.",
    },
    {
      img: Appdeveloper,
      courses: "Full Stack Development",
      link: "/course/fullstack",
    
      desc: "Become an unbeatable Full Stack Developer with My Tech Professionals, At My Tech Professionals, we offer comprehensive and immersive full stack development courses designed to equip you with the skills and knowledge needed to excel in the dynamic field of web development. Our courses cover the entire spectrum of front-end and back-end technologies, allowing you to become a well-rounded and versatile full stack developer.",
    },
  ];

  return (
    <div>
      <div className="max-w-[1140px] mt-40 mx-auto w-full px-3 xl:px-0">
        <h1 className="text-[30px] max-w-[528px] w-full mx-auto text-center sm:text-[44px]  font-bold leading-[34px] sm:leading-[60px] text-black">
          Choose According To
          <span className=" about_us_color ">Your Interest</span>
        </h1>
        <div className="mt-[67px]">
          {ourCourses.map((item, index) => (
            <div
              key={index}
              className="px-6 mt-10 lg:px-[48px] py-6 md:py-[42px] flex md:flex-row flex-col items-center justify-between rounded-[8px] bg-white shadow-[0px_6px_29px_rgba(54,113,202,0.12)]"
            >
              <div>
                <h3 className="text-[28px] sm:text-[32px] font-medium leading-[38px] text-black">
                  {item.courses}
                </h3>
                <p className="text-[16px] line-clamp-5  max-w-[485px] w-full mt-3 font-normal  leading-[25px] text-black">
                  {item.desc}
                </p>
                <button
                  onClick={() => router(`${item.link}`)}
                  className="text-[16px] mt-[32px] shadow-[0px_2px_14px_rgba(60,124,221,0.38)] font-semibold text-white px-6 bg-[#231E62] h-[49px] rounded-[10px]"
                >
                  Full Course Details
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
              <div className="md:ml-2 mt-5 lg:mt-0 lg:ml-0">
                <img
                  src={item.img}
                  width={340}
                  height={313}
                  alt="Front End Developer img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
