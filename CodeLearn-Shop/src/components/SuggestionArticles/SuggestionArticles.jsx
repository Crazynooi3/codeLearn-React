import React from "react";
import "./SuggestionArticles.css";

export default function SuggestionArticles() {
  return (
    <div class="suggestion-articles">
      <div class="row">
        <div class="col-6">
          <div class="suggestion-articles__right suggestion-articles__content">
            <a href="#" class="suggestion-articles__icon-link">
              <i class="fas fa-arrow-right suggestion-articles__icon"></i>
            </a>
            <a href="#" class="suggestion-articles__link">
              سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ | تجربه برنامه
              نویسان
            </a>
          </div>
        </div>
        <div class="col-6">
          <div class="suggestion-articles__left suggestion-articles__content">
            <a href="#" class="suggestion-articles__icon-link">
              <i class="fas fa-arrow-left suggestion-articles__icon"></i>
            </a>
            <a href="#" class="suggestion-articles__link">
              سریع ترین و بهترین راه یادگیری جاوا اسکریپت چیست؟ | تجربه برنامه
              نویسان
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
