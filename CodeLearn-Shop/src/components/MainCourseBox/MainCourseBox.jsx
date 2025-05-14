import React from "react";
import "./MainCourseBox.css";

export default function MainCourseBox() {
  return (
    <div class="course-boxes">
      <div class="row">
        <div class="col-4">
          <div class="course-boxes__box">
            <div class="course-boxes__box-right">
              <i class="course-boxes__box-right-icon fas fa-graduation-cap"></i>
            </div>
            <div class="course-boxes__box-left">
              <span class="course-boxes__box-left-title">وضعیت دوره:</span>
              <span class="course-boxes__box-left--subtitle">
                به اتمام رسیده
              </span>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="course-boxes__box">
            <div class="course-boxes__box-right">
              <i class="course-boxes__box-right-icon fas fa-clock"></i>
            </div>
            <div class="course-boxes__box-left">
              <span class="course-boxes__box-left-title">مدت زمان دوره:</span>
              <span class="course-boxes__box-left--subtitle">19 ساعت</span>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="course-boxes__box">
            <div class="course-boxes__box-right">
              <i class="course-boxes__box-right-icon fas fa-calendar-alt"></i>
            </div>
            <div class="course-boxes__box-left">
              <span class="course-boxes__box-left-title">آخرین بروزرسانی:</span>
              <span class="course-boxes__box-left--subtitle">1401/03/02</span>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="course-boxes__box">
            <div class="course-boxes__box-right">
              <i class="course-boxes__box-right-icon fas fa-user-alt"></i>
            </div>
            <div class="course-boxes__box-left">
              <span class="course-boxes__box-left-title">روش پشتیبانی</span>
              <span class="course-boxes__box-left--subtitle">آنلاین</span>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="course-boxes__box">
            <div class="course-boxes__box-right">
              <i class="course-boxes__box-right-icon fas fa-info-circle"></i>
            </div>
            <div class="course-boxes__box-left">
              <span class="course-boxes__box-left-title">پیش نیاز:</span>
              <span class="course-boxes__box-left--subtitle">HTML CSS</span>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="course-boxes__box">
            <div class="course-boxes__box-right">
              <i class="course-boxes__box-right-icon fas fa-play"></i>
            </div>
            <div class="course-boxes__box-left">
              <span class="course-boxes__box-left-title">نوع مشاهده:</span>
              <span class="course-boxes__box-left--subtitle">
                ضبط شده / آنلاین
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
