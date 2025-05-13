import React from "react";
import "./CoursesSection.css";
import Pagination from "../Pagination/Pagination";

export default function CoursesSection() {
  return (
    <section class="courses">
      <div class="container">
        <div class="courses-top-bar">
          <div class="courses-top-bar__right">
            <div class="courses-top-bar__row-btn courses-top-bar__icon--active">
              <i class="fas fa-border-all courses-top-bar__icon"></i>
            </div>
            <div class="courses-top-bar__column-btn">
              <i class="fas fa-align-left courses-top-bar__icon"></i>
            </div>

            <div class="courses-top-bar__selection">
              <span class="courses-top-bar__selection-title">
                مرتب سازی پیش فرض
                <i class="fas fa-angle-down courses-top-bar__selection-icon"></i>
              </span>
              <ul class="courses-top-bar__selection-list">
                <li class="courses-top-bar__selection-item courses-top-bar__selection-item--active">
                  مرتب سازی پیش فرض
                </li>
                <li class="courses-top-bar__selection-item">
                  مربت سازی بر اساس محبوبیت
                </li>
                <li class="courses-top-bar__selection-item">
                  مربت سازی بر اساس امتیاز
                </li>
                <li class="courses-top-bar__selection-item">
                  مربت سازی بر اساس آخرین
                </li>
                <li class="courses-top-bar__selection-item">
                  مربت سازی بر اساس ارزان ترین
                </li>
                <li class="courses-top-bar__selection-item">
                  مربت سازی بر اساس گران ترین
                </li>
              </ul>
            </div>
          </div>

          <div class="courses-top-bar__left">
            <form action="#" class="courses-top-bar__form">
              <input
                type="text"
                class="courses-top-bar__input"
                placeholder="جستجوی دوره ..."
              />
              <i class="fas fa-search courses-top-bar__search-icon"></i>
            </form>
          </div>
        </div>

        <div class="courses-content">
          <div class="container">
            <div class="row">
              <div class="col-4">
                <div class="course-box">
                  <a href="#">
                    <img
                      src="/images/courses/jango.png"
                      alt="Course img"
                      class="course-box__img"
                    />
                  </a>
                  <div class="course-box__main">
                    <a href="#" class="course-box__title">
                      دوره پروژه محور متخصص جنگو
                    </a>

                    <div class="course-box__rating-teacher">
                      <div class="course-box__teacher">
                        <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                        <a href="#" class="course-box__teacher-link">
                          رضا دولتی
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
                        <span class="course-box__users-text">500</span>
                      </div>
                      <span class="course-box__price">1,000,000</span>
                    </div>
                  </div>

                  <div class="course-box__footer">
                    <a href="#" class="course-box__footer-link">
                      مشاهده اطلاعات
                      <i class="fas fa-arrow-left course-box__footer-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="course-box">
                  <a href="#">
                    <img
                      src="/images/courses/fareelancer.png"
                      alt="Course img"
                      class="course-box__img"
                    />
                  </a>
                  <div class="course-box__main">
                    <a href="#" class="course-box__title">
                      دوره پروژه محور متخصص جنگو
                    </a>

                    <div class="course-box__rating-teacher">
                      <div class="course-box__teacher">
                        <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                        <a href="#" class="course-box__teacher-link">
                          رضا دولتی
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
                        <span class="course-box__users-text">500</span>
                      </div>
                      <span class="course-box__price">1,000,000</span>
                    </div>
                  </div>

                  <div class="course-box__footer">
                    <a href="#" class="course-box__footer-link">
                      مشاهده اطلاعات
                      <i class="fas fa-arrow-left course-box__footer-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="course-box">
                  <a href="#">
                    <img
                      src="/images/courses/js_project.png"
                      alt="Course img"
                      class="course-box__img"
                    />
                  </a>
                  <div class="course-box__main">
                    <a href="#" class="course-box__title">
                      دوره پروژه محور متخصص جنگو
                    </a>

                    <div class="course-box__rating-teacher">
                      <div class="course-box__teacher">
                        <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                        <a href="#" class="course-box__teacher-link">
                          رضا دولتی
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
                        <span class="course-box__users-text">500</span>
                      </div>
                      <span class="course-box__price">1,000,000</span>
                    </div>
                  </div>

                  <div class="course-box__footer">
                    <a href="#" class="course-box__footer-link">
                      مشاهده اطلاعات
                      <i class="fas fa-arrow-left course-box__footer-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </section>
  );
}
