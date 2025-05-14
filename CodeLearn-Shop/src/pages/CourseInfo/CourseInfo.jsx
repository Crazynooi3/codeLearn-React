import React from "react";
import "./CourseInfo.css";

import TheTopBar from "../../components/base/TheTopBar/TheTopBar";
import TheNavBar from "../../components/base/TheNavBar/TheNavBar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Course from "../../components/Course/Course";
import MainCourseInfo from "../../components/MainCourseInfo/MainCourseInfo";
import TheFooter from "../../components/base/TheFooter/TheFooter";

export default function CourseInfo() {
  return (
    <>
      <TheTopBar />
      <TheNavBar />
      <Breadcrumb
        link={[
          { id: 1, title: "خانه", to: "/" },
          { id: 2, title: "دوره فرانت اند", to: "/Category/frontend" },
          {
            id: 1,
            title: "دوره مختصص جاوااسکریپت",
            to: "/Course-Info/frontend",
          },
        ]}
      />
      <Course />
      <MainCourseInfo />
      <TheFooter />
    </>
  );
}
