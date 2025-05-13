import React from "react";
import "./Articles.css";

import SectionTitle from "../SectionTitle/SectionTitle";
import ArticleBox from "../ArticleBox/ArticleBox";

export default function Articles() {
  return (
    <section class="articles">
      <div class="container">
        <SectionTitle
          title={"جدیدترین مقاله ها"}
          text={"پیش به سوی ارتقای دانش"}
          btntext={"تمامی مقاله ها"}
        />

        <div class="articles__content">
          <div class="row">
            <ArticleBox />
            <ArticleBox />
            <ArticleBox />
            <ArticleBox />
          </div>
        </div>
      </div>
    </section>
  );
}
