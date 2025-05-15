import React from "react";
import "./LastCourse.css";

import SectionTitle from "../SectionTitle/SectionTitle";
import CourseBox from "../CourseBox/CourseBox";
export default function LastCourse() {
  return (
    <div class="courses">
      <div class="container">
        <SectionTitle
          title={"جدیدترین دوره ها"}
          text={"سکوی پرتاپ شما به سمت موفقیت"}
          btntext={"تمامی دوره ها"}
          topic={"جدیدترین دوره ها"}
        />

        <div class="courses-content">
          <div class="container">
            <div class="row">
              <CourseBox
                Image={"images/courses/fareelancer.png"}
                Title={"دوره تست کامپوننت"}
                Teacher={"احسان قناد"}
                Users={123456}
                Price={1000000}
              />
              <CourseBox
                Image={"images/courses/jango.png"}
                Title={"دوره پروژه محور متخصص جنگو"}
                Teacher={"احسان قناد"}
                Users={16}
                Price={10000}
              />
              <CourseBox
                Image={"images/courses/js_project.png"}
                Title={"دوره پروژه محور جاوا اسکریپت"}
                Teacher={"احسان قناد"}
                Users={160}
                Price={10000000}
              />
              <CourseBox
                Image={"images/courses/youtuber.png"}
                Title={"دوره پروژه محور جاوا اسکریپت"}
                Teacher={"احسان قناد"}
                Users={160}
                Price={10000000}
              />
              <CourseBox
                Image={"images/courses/python.png"}
                Title={"دوره پروژه محور جاوا اسکریپت"}
                Teacher={"احسان قناد"}
                Users={160}
                Price={10000000}
              />
              <CourseBox
                Image={"images/courses/nodejs.png"}
                Title={"دوره پروژه محور جاوا اسکریپت"}
                Teacher={"احسان قناد"}
                Users={160}
                Price={10000000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
