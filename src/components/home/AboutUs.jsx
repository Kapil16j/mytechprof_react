import React from "react";

import Software1 from "../../assets/img/home/software1.jpg"
import { CompanyName } from "../common/base";

const AboutUs = () => {
  return (
    <div>
      <div className="max-w-[1140px] md:mt-32 sm:mt-20 mt-10 w-full mx-auto px-3 xl:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:order-1 mt-5 lg:mt-0 order-2">
            <img
              src={Software1}
              width={514}
              height={517}
              alt="aboutus img"
            />
          </div>
          <div className="max-w-[486px] lg:order-2 order-1 mt-5 lg:mt-0 lg:ml-2 xl:ml-0 w-full">
            <h1 className="text-[44px] font-bold leaading-[48px] text-black">
              About <span className=" about_us_color ">Us</span>
            </h1>
            <p className="text-[16px] font-normal mt-5 leading-[25px] text-black">
           {CompanyName}, is a leading IT company that specializes in providing
              cutting-edge solutions to businesses of all sizes. With a team of
              highly skilled professionals, we offer a wide range of services
              including software development, web design, mobile app
              development, and cloud solutions. Our expertise lies in creating
              tailored solutions that meet the unique requirements of our
              clients. We pride ourselves on delivering high-quality projects on
              time and within budget. Our customer-centric approach, attention
              to detail, and commitment to excellence set us apart. Partner with
              {CompanyName}, to leverage technology and elevate your business to new
              heights. Let&apos;s embark on a transformative journey together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
