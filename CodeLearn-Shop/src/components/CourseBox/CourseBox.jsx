import React from "react";
import "./CourseBox.css";

import { Link } from "react-router-dom";

export default function CourseBox({ Image, Title, Teacher, Users, Price }) {
  return (
    <div class="col-4">
      <Link to={`/course-info/${Title}`}>
        <div class="course-box">
          <a href="#">
            <img src={Image} alt="Course img" class="course-box__img" />
          </a>
          <div class="course-box__main">
            <a href="#" class="course-box__title">
              {Title}
            </a>

            <div class="course-box__rating-teacher">
              <div class="course-box__teacher">
                <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                <a href="#" class="course-box__teacher-link">
                  {Teacher}
                </a>
              </div>
              <div class="course-box__rating">
                <img
                  src="/images/svgs/star.svg"
                  alt="rating"
                  class="course-box__star"
                />
                <img
                  src="/images/svgs/star_fill.svg"
                  alt="rating"
                  class="course-box__star"
                />
                <img
                  src="/images/svgs/star_fill.svg"
                  alt="rating"
                  class="course-box__star"
                />
                <img
                  src="/images/svgs/star_fill.svg"
                  alt="rating"
                  class="course-box__star"
                />
                <img
                  src="/images/svgs/star_fill.svg"
                  alt="rating"
                  class="course-box__star"
                />
              </div>
            </div>

            <div class="course-box__status">
              <div class="course-box__users">
                <i class="fas fa-users course-box__users-icon"></i>
                <span class="course-box__users-text">{Users}</span>
              </div>
              <span class="course-box__price">{Price.toLocaleString()}</span>
            </div>
          </div>

          <div class="course-box__footer">
            <a href="#" class="course-box__footer-link">
              مشاهده اطلاعات
              <i class="fas fa-arrow-left course-box__footer-icon"></i>
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
}
