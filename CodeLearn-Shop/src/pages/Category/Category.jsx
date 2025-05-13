import React from "react";
import "./Category.css";
import TheTopBar from "../../components/base/TheTopBar/TheTopBar";
import TheNavBar from "../../components/base/TheNavBar/TheNavBar";
import CoursesSection from "../../components/CoursesSection/CoursesSection";
import TheFooter from "../../components/base/TheFooter/TheFooter";

export default function Category() {
  return (
    <>
      <TheTopBar />
      <TheNavBar />
      <CoursesSection />
      <TheFooter />
    </>
  );
}
