import React, { useEffect, useState } from "react";
import "./CourseInfo.css";

import { useParams } from "react-router-dom";

import TheTopBar from "../../components/base/TheTopBar/TheTopBar";
import TheNavBar from "../../components/base/TheNavBar/TheNavBar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Course from "../../components/Course/Course";
import MainCourseInfo from "../../components/MainCourseInfo/MainCourseInfo";
import TheFooter from "../../components/base/TheFooter/TheFooter";

export default function CourseInfo() {
  const [courseInfo, setCourseInfo] = useState({});
  const [comments, setComments] = useState([]);
  const [sessions, setSessions] = useState([]);

  const { courseName } = useParams();
  const userToken = localStorage.getItem("token");
  // console.log(courseInfo);

  useEffect(() => {
    fetch(`http://localhost:3000/v1/courses/${courseName}`, {
      method: "POST",
      headers: {
        Authorization: `Beare ${userToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setSessions(data.sessions);
        setComments(data.comments);
        setCourseInfo(data);
      });
  }, []);
  console.log(courseInfo);
  // categoryID
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
      <Course
        title={courseInfo.name}
        categoryTitle={courseInfo?.categoryID?.title || ""}
        description={courseInfo?.description || ""}
        image={courseInfo?.cover}
      />
      <MainCourseInfo />
      <TheFooter />
    </>
  );
}
