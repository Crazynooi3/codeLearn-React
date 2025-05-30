import React from "react";

export default function CourseBoxes(props) {
  return (
    <div class="course-boxes__box">
      <div class="course-boxes__box-right">
        <i class={`course-boxes__box-right-icon fas ${props.icon}`}></i>
      </div>
      <div class="course-boxes__box-left">
        <span class="course-boxes__box-left-title">{props.title}</span>
        <span class="course-boxes__box-left--subtitle">{props.subtitle}</span>
      </div>
    </div>
  );
}
