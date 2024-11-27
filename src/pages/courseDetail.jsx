import React, { useEffect, useState } from "react";

import { allcourselist } from "../components/common/helper";
import TechList from "../components/ourcourses/TechList";
import Hero from "../components/ourcourses/Hero";
import { useNavigate, useParams } from "react-router-dom";



const CourseDetails = () => {
  const [activeCourseDetails, setActiveCourseDetails] = useState({});
  const router = useNavigate();
  const params = useParams()
  console.log("router????",params)
  const path = params.category;
// const path = " fdnknf;";
  console.log("path",path);
  useEffect(() => {
    for (let index = 0; index < allcourselist.length; index++) {
      if (path === allcourselist[index].slug) {
        setActiveCourseDetails(allcourselist[index]);
      } else if (path === allcourselist[index].slug) {
        setActiveCourseDetails(allcourselist[index]);
      }
    }
  }, [path]);

  return (
    <>
        <Hero title={activeCourseDetails} />
        <TechList activeCourseDetails={activeCourseDetails} />
    </>
  );
};

export default CourseDetails;
