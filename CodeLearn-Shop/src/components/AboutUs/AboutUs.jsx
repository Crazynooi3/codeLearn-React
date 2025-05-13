import React from "react";
import "./AboutUs.css";

import SectionTitle from "../SectionTitle/SectionTitle";

export default function AboutUs() {
  return (
    <div class="about-us">
      <div class="container">
        <SectionTitle
          title={"ما چه کمکی بهتون میکنیم؟"}
          text={"از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست"}
          // btntext={"تمامی دوره ها"}
        />

        <div class="container">
          <div class="row">
            <div class="col-6">
              <div class="about-us__box">
                <div class="about-us__box-right">
                  <i class="far fa-copyright about-us__icon"></i>
                </div>
                <div class="about-us__box-left">
                  <span class="about-us__box-title">دوره های اختصاصی</span>
                  <span class="about-us__box-text">
                    با پشتیبانی و کیفیت بالا ارائه میده !
                  </span>
                </div>
              </div>
            </div>

            <div class="col-6">
              <div class="about-us__box">
                <div class="about-us__box-right">
                  <i class="fas fa-leaf about-us__icon"></i>
                </div>
                <div class="about-us__box-left">
                  <span class="about-us__box-title">اجازه تدریس</span>
                  <span class="about-us__box-text">
                    به هر مدرسی رو نمیده. چون کیفیت براش مهمه !
                  </span>
                </div>
              </div>
            </div>

            <div class="col-6">
              <div class="about-us__box">
                <div class="about-us__box-right">
                  <i class="fas fa-gem about-us__icon"></i>
                </div>
                <div class="about-us__box-left">
                  <span class="about-us__box-title">دوره پولی و رایگان</span>
                  <span class="about-us__box-text">
                    براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در
                    پشتیبانی و اپدیت دوره ارائه بده
                  </span>
                </div>
              </div>
            </div>

            <div class="col-6">
              <div class="about-us__box">
                <div class="about-us__box-right">
                  <i class="fas fa-crown about-us__icon"></i>
                </div>
                <div class="about-us__box-left">
                  <span class="about-us__box-title">اهمیت به کاربر</span>
                  <span class="about-us__box-text">
                    اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به
                    کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار
                    هست
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
