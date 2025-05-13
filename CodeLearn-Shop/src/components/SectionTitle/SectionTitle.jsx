import React from "react";
import "./SectionTitle.css";

export default function SectionTitle({ title, text, btntext }) {
  return (
    <div class="courses-header">
      <div class="courses-header__right">
        <span class="courses-header__title title">{title}</span>
        <span class="courses-header__text">{text}</span>
      </div>
      <div class="courses-header__left">
        <a href="#" class="courses-header__link">
          {btntext}
          <i class="fas fa-arrow-left courses-header__icon"></i>
        </a>
      </div>
    </div>
  );
}
