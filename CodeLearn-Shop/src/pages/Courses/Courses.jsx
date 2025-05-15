import React from "react";
import "./Courses.css";

import { useParams } from "react-router-dom";
import TheTopBar from "../../components/base/TheTopBar/TheTopBar";
import TheNavBar from "../../components/base/TheNavBar/TheNavBar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CourseBox from "../../components/CourseBox/CourseBox";
import Pagination from "../../components/Pagination/Pagination";
import TheFooter from "../../components/base/TheFooter/TheFooter";

export default function Courses() {
  const { coursesName } = useParams();

  return (
    <>
      <TheTopBar />
      <TheNavBar />
      <Breadcrumb
        link={[
          { id: 1, title: "خانه", to: "/" },
          { id: 1, title: coursesName, to: `/courses/${coursesName}` },
        ]}
      />
      <div class="courses-content">
        <div class="container">
          <div class="row">
            <CourseBox
              Image={"/images/courses/fareelancer.png"}
              Title={"دوره تست کامپوننت"}
              Teacher={"احسان قناد"}
              Users={123456}
              Price={1000000}
            />
            <CourseBox
              Image={"/images/courses/jango.png"}
              Title={"دوره پروژه محور متخصص جنگو"}
              Teacher={"احسان قناد"}
              Users={16}
              Price={10000}
            />
            <CourseBox
              Image={"/images/courses/js_project.png"}
              Title={"دوره پروژه محور جاوا اسکریپت"}
              Teacher={"احسان قناد"}
              Users={160}
              Price={10000000}
            />
            <CourseBox
              Image={"/images/courses/youtuber.png"}
              Title={"دوره پروژه محور جاوا اسکریپت"}
              Teacher={"احسان قناد"}
              Users={160}
              Price={10000000}
            />
            <CourseBox
              Image={"/images/courses/python.png"}
              Title={"دوره پروژه محور جاوا اسکریپت"}
              Teacher={"احسان قناد"}
              Users={160}
              Price={10000000}
            />
            <CourseBox
              Image={"/images/courses/nodejs.png"}
              Title={"دوره پروژه محور جاوا اسکریپت"}
              Teacher={"احسان قناد"}
              Users={160}
              Price={10000000}
            />
          </div>
        </div>
      </div>

      <Pagination />
      <TheFooter />
    </>
  );
}
