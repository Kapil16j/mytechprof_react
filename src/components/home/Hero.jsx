import React from "react";
import MovingText from "react-moving-text";
import { useNavigate } from "react-router-dom";
import { baseImg } from "../common/base";
import { CompanyName } from "../common/base";

import HeroIllustration from "../../assets/img/home/hero-illustration.svg"
import Hero1 from "../../assets/img/home/hero1.jpg"

const Hero = () => {
  const router = useNavigate();

  return (
    <div className="xl:h-[820px] relative flex-col-reverse lg:flex-row-reverse xl:flex-row flex justify-center max-w-[1920px] mx-auto 3xl:h-[1000px]">
      {/* HERO LEFT ILLUSTRATION  */}
      <img
        className="xl:absolute xl:right-0 xl:top-[25%] max-w-lg xl:max-w-full mx-auto w-full sm:w-fit"
        src={HeroIllustration}
        alt="My Tech Professionals hero illustration"
      />

      {/* BACKGROUND IMAGE  */}
      {/* <img
        className="object-cover w-full h-full sm:w-fit sm:h-fit absolute top-0 left-0 z-[-1] 3xl:w-full 2xl:max-w-[1300px] 3xl:max-w-[1500px] 3xl:hidden"
        src="/img/home/hero-section-img.png"
        alt="hero section img"
      /> */}
      {/* AFTER FHD  */}
      {/* <img
        className="absolute top-[-130px] left-[-80px] z-[-1] 3xl:w-full 3xl:max-w-[1300px] hidden 3xl:block"
        src="/img/home/hero-bg-image-fhd.png"
        alt="hero section img"
      /> */}

      <div className="mx-auto max-w-[1140px] w-full flex items-center pt-28 lg:py-36 px-3 sm:px-4 mb-10 sm:mb-20 xl:mb-0 mt-12 sm:mt-0">

        <div className="max-w-[560px] 2xl:max-w-[670px]">
          <h1 className="text-black font-extrabold text-[30px] sm:text-[38px] leading-[38px] sm:leading-[48px] font-springbold">
            <MovingText
              type="slideInFromLeft"
              duration="2000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              Hello and thank you for visiting {CompanyName}, Your Path to Seamless
              Digital Solutions.
            </MovingText>
          </h1>
          <p className="text-black font-normal text-[16px] lg:text-[18px] leading-[30px] text-opacity-90 my-4 max-w-[470px] lg:max-w-[590px]">
            At {CompanyName}, we specialize in crafting innovative websites and user-friendly applications designed to empower businesses to thrive in the digital world. Our team of skilled developers and designers work closely with you to deliver customized solutions tailored to your unique needs. Whether you're aiming to expand your online presence or enhance operational efficiency, we're here to help you succeed.
          </p>


          <button
            onClick={() => router("/about-us")}
            className="text-[16px]  shadow-[0px_2px_14px_rgba(60,124,221,0.38)] font-semibold text-white  w-[143px] sm:w-[173px] bg-[#231E62] h-[49px] rounded-[2px]"
          >
            Explore More
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
