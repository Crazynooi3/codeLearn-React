import React from "react";
import "./Course.css";

export default function Course(props) {
  return (
    <section class="course-info">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <a href="#" class="course-info__link">
              {props.categoryTitle}
            </a>
            <h1 class="course-info__title">{props.title}</h1>
            <p class="course-info__text">{props.description}</p>
            <div class="course-info__social-media">
              <a href="#" class="course-info__social-media-item">
                <i class="fab fa-telegram-plane course-info__icon"></i>
              </a>
              <a href="#" class="course-info__social-media-item">
                <i class="fab fa-twitter course-info__icon"></i>
              </a>
              <a href="#" class="course-info__social-media-item">
                <i class="fab fa-facebook-f course-info__icon"></i>
              </a>
            </div>
          </div>

          <div class="col-6">
            <video
              src=""
              poster={props.image}
              class="course-info__video"
              controls
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
}
