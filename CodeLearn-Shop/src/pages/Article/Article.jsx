import React from "react";
import "./Article.css";

import TheTopBar from "../../components/base/TheTopBar/TheTopBar";
import TheNavBar from "../../components/base/TheNavBar/TheNavBar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import TheFooter from "../../components/base/TheFooter/TheFooter";
import Blog from "../../components/Blog/Blog";
export default function Article() {
  return (
    <>
      <TheTopBar />
      <TheNavBar />
      <Breadcrumb
        link={[
          { id: 1, title: "خانه", to: "/" },
          { id: 2, title: "مقاله ها", to: "/" },
          {
            id: 3,
            title:
              "معرفی بهترین سایت آموزش جاوا اسکریپت [ تجربه محور ] + آموزش رایگان",
            to: "/",
          },
        ]}
      />
      <Blog />
      <TheFooter />
    </>
  );
}
