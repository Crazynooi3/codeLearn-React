import React from "react";
import "./Index.css";

import TheHeader from "../../components/base/TheHeader/TheHeader";
import LastCourse from "../../components/LastCourse/LastCourse";
import AboutUs from "../../components/AboutUs/AboutUs";
import PopularCourses from "../../components/PopularCourses/PopularCourses";
import PreSellCourses from "../../components/PreSellCourses/PreSellCourses";
import Articles from "../../components/Articles/Articles";

export default function index() {
  return (
    <>
      <TheHeader />
      <LastCourse />
      <AboutUs />
      <PopularCourses />
      <PreSellCourses />
      <Articles />
    </>
  );
}
