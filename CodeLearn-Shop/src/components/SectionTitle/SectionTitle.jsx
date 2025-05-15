import React from "react";
import "./SectionTitle.css";
import { Link } from "react-router-dom";

export default function SectionTitle({ title, text, btntext, topic }) {
  return (
    <div class="courses-header">
      <div class="courses-header__right">
        <span class="courses-header__title title">{title}</span>
        <span class="courses-header__text">{text}</span>
      </div>
      {btntext ? (
        <Link to={`/courses/${topic}`}>
          <div class="courses-header__left">
            <a href="#" class="courses-header__link">
              {btntext}
              <i class="fas fa-arrow-left courses-header__icon"></i>
            </a>
          </div>
        </Link>
      ) : null}
    </div>
  );
}
