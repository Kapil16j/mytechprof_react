import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ourServiceData } from "../components/common/helper";

const ServicesDetails = () => {
  const [activeCourseDetails, setActiveCourseDetails] = useState({});
  const router = useNavigate();
  const params = useParams();
  const path = params.category;

  useEffect(() => {
    const service = ourServiceData.find((item) => item.slug === path);
    if (service) {
      setActiveCourseDetails(service);
    } else {
      router("/not-found"); // Redirect if the slug doesn't match
    }
  }, [path, router]);

  if (!activeCourseDetails.title) return null; // Avoid rendering until data is loaded

  return (
    <div className="max-w-[1140px] mt-40 mx-auto w-full px-3 xl:px-0">
      {/* Header Section */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {activeCourseDetails.title}
        </h1>
        <p className="text-gray-700">{activeCourseDetails.desc}</p>
      </div> */}

      <div className="hero-section rounded-xl  text-white py-10 px-5 shadow-[0px_2px_14px_rgba(60,124,221,0.38)]    bg-[#315DB1]">
        <div className="max-w-[1140px] mx-auto text-center">
          <h1 className="text-3xl  font-bold mb-4">
            {activeCourseDetails.title}
          </h1>
          <p className="text-lg sm:text-xl max-w-[700px] mx-auto">
            {activeCourseDetails.desc}
          </p>
        </div>
      </div>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={activeCourseDetails.img}
            alt={activeCourseDetails.title}
            className="rounded-lg shadow-lg max-h-80 w-full object-cover"
          />
        </div>

        {/* Details */}
        <div>
          {activeCourseDetails.detailSections?.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {section.heading}
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {section.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
