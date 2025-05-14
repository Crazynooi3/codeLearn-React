import React from "react";
import "./MainCourseInfo.css";
import MainCourseBox from "../MainCourseBox/MainCourseBox";
import StartCourseProgress from "../StartCourseProgress/StartCourseProgress";
import Introduction from "../Introduction/Introduction";
import TeacherDetails from "../TeacherDetails/TeacherDetails";
import Sidebar from "../Sidebar/Sidebar";

export default function MainCourseInfo() {
  return (
    <main class="main">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="course">
              {/* <!-- Start Course Boxes --> */}
              <MainCourseBox />
              {/* <!-- Finish Course Boxes --> */}

              {/* <!-- Start Course Progress --> */}
              <StartCourseProgress />
              {/* <!-- Finish Course Progress --> */}

              {/* <!-- Start Introduction --> */}

              <Introduction />

              {/* <!-- Finish Introduction --> */}

              {/* <!-- Start Teacher Details --> */}

              <TeacherDetails />

              {/* <!-- Finish Teacher Details --> */}
            </div>
          </div>

          <Sidebar />
        </div>
      </div>
    </main>
  );
}
