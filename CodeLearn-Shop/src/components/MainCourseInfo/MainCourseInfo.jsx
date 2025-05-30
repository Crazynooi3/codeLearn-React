import React from "react";
import "./MainCourseInfo.css";
import MainCourseBox from "../MainCourseBox/MainCourseBox";
import StartCourseProgress from "../StartCourseProgress/StartCourseProgress";
import Introduction from "../Introduction/Introduction";
import TeacherDetails from "../TeacherDetails/TeacherDetails";
import Sidebar from "../Sidebar/Sidebar";
import Comments from "../Comments/Comments";

export default function MainCourseInfo({ data }) {
  return (
    <main class="main">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="course">
              {/* <!-- Start Course Boxes --> */}
              <MainCourseBox data={data} />
              {/* <!-- Finish Course Boxes --> */}

              {/* <!-- Start Course Progress --> */}
              <StartCourseProgress />
              {/* <!-- Finish Course Progress --> */}

              {/* <!-- Start Introduction --> */}

              <Introduction />

              {/* <!-- Finish Introduction --> */}

              {/* <!-- Start Teacher Details --> */}

              <TeacherDetails />
              <Comments />

              {/* <!-- Finish Teacher Details --> */}
            </div>
          </div>

          <Sidebar data={data} />
        </div>
      </div>
    </main>
  );
}
