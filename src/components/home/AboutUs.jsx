import React from "react";

import Software1 from "../../assets/img/home/software1.jpg"
import Aboutusimg from "../../assets/img/home/aboutusimg.jpg"
import { CompanyName } from "../common/base";

const AboutUs = () => {
  return (
    <div>
      <div className="max-w-[1140px] md:mt-32 sm:mt-20 mt-10 w-full mx-auto px-3 xl:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:order-1 mt-5 lg:mt-0 order-2">
            <img
              src={Aboutusimg}
              width={514}
              height={517}
              alt="aboutus img"
            />
          </div>
          <div className="max-w-[486px] lg:order-2 order-1 mt-5 lg:mt-0 lg:ml-2 xl:ml-0 w-full">
            <h1 className="text-[44px] font-bold leaading-[48px] text-black">
              About <span className=" about_us_color ">Us</span>
            </h1>
            <p className="text-[16px] mt-7 font-normal leading-6 text-center lg:text-start text-black max-w-[512px]">
  {CompanyName} is a leading IT firm dedicated to delivering innovative solutions for businesses of all sizes. With a team of skilled professionals, we specialize in software development, web design, mobile app development, and cloud services. Our focus is on crafting personalized solutions that address the unique needs of each client. Committed to quality, we ensure projects are delivered on time and within budget. Partner with {CompanyName} to harness technology and take your business to the next level. Let’s create something exceptional together.
</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
