import React from "react";
import { Link } from "react-router-dom";

import OurProductsImg from "../../assets/img/home/courses.png";

const OurCourses = () => {
  return (
    <div>
      <div className="max-w-[1140px] sm:mt-20 mt-10 lg:mt-40 w-full mx-auto px-3 xl:px-0 ">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="max-w-[520px] w-full">
            <h1 className="text-[30px] sm:text-[44px] font-bold leading-[34px] sm:leading-[48px] text-black">
              Explore Our <span className="about_us_color">Products</span>
            </h1>
            <p className="text-[16px] mt-5 font-normal leading-[25px]">
              At My Tech Professionals, we offer a wide variety of products
              designed to enhance your skills and professional development. Our
              product range includes cutting-edge tools, educational resources,
              and innovative solutions for the IT industry. Whether you are looking
              to improve your technical knowledge or expand your professional
              toolkit, we have products that cater to all your needs. Designed by
              experts in the field, our products aim to help you stay ahead in the
              fast-paced tech world. Explore our collection and find the right
              product to accelerate your growth and unlock new opportunities.
            </p>
            <Link to="/our-products">
              <button className="text-[16px] mt-[28px] shadow-[0px_2px_14px_rgba(60,124,221,0.38)] font-semibold text-white w-[135px] bg-[#231E62] h-[49px] rounded-[10px]">
                Learn More
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </Link>
          </div>
          <div className="max-w-[300px] sm:max-w-fit mt-10 lg:mt-0">
            <img
              src={OurProductsImg}
              width={530}
              height={520}
              alt="our products"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCourses;


