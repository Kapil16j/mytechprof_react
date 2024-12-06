import React from "react";
import { MaintainenceIcon } from "../common/icon";
import { Link } from "react-router-dom";
import { CompanyName } from "../common/base";
import OuterImg from "../../assets/img/home/ourteam-img.png"

const AboutUsDetails = () => {
  return (
    <div>
      <div className="max-w-[1140px] mx-auto px-3 xl:px-0  mt-32">

    

        <div className="flex justify-between flex-col lg:flex-row items-center">
          <div className="flex items-center flex-col lg:items-start mt-5 lg:mt-0">
            <p className="text-[35px] sm:text-[48px] leading-[56px]  font-bold  about_us_color  ">
              About Us
            </p>
            <p className="text-[16px] mt-7 font-normal leading-6 text-center lg:text-start text-black max-w-[512px]">
              {CompanyName} is a leading IT firm dedicated to delivering innovative solutions for businesses of all sizes. With a team of skilled professionals, we specialize in software development, web design, mobile app development, and cloud services. Our focus is on crafting personalized solutions that address the unique needs of each client. Committed to quality, we ensure projects are delivered on time and within budget. Partner with {CompanyName} to harness technology and take your business to the next level. Let’s create something exceptional together.
            </p>

            <Link to="/our-courses">
              <button className="text-[16px] mt-[28px] shadow-[0px_2px_14px_rgba(60,124,221,0.38)] font-semibold text-white w-[135px] bg-[#231E62] h-[49px] rounded-[10px]">
                Learn More
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </Link>
          </div>
          <div className="">
            <MaintainenceIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDetails;
