import React from "react";
import "./Signup.css";

import { Link } from "react-router-dom";
import TheTopBar from "../../components/base/TheTopBar/TheTopBar";
import TheNavBar from "../../components/base/TheNavBar/TheNavBar";
import TheFooter from "../../components/base/TheFooter/TheFooter";
import Input from "../../components/Form/Input";
import Btn from "../../components/Form/Btn";

export default function Signup() {
  const registerNewUser = (event) => {
    event.preventDefault();
    console.log("new register");
  };
  return (
    <>
      <TheTopBar />
      <TheNavBar />
      <section class="login-register">
        <div class="login register-form">
          <span class="login__title">ساخت حساب کاربری</span>
          <span class="login__subtitle">خوشحالیم قراره به جمع ما بپیوندی</span>
          <div class="login__new-member">
            <span class="login__new-member-text">قبلا ثبت‌نام کرده‌اید؟ </span>
            <Btn className="login__new-member-link" to="/login">
              وارد شوید
            </Btn>
          </div>
          <form action="#" class="login-form">
            <div class="login-form__username">
              <Input
                element="input"
                type="text"
                placeholder="نام کاربری"
                className="login-form__username-input"
              />
              <i class="login-form__username-icon fa fa-user"></i>
            </div>
            <div class="login-form__password">
              <Input
                element="input"
                type="email"
                placeholder="آدرس ایمیل"
                className="login-form__password-input"
              />
              <i class="login-form__password-icon fa fa-envelope"></i>
            </div>
            <div class="login-form__password">
              <Input
                element="input"
                type="password"
                placeholder="رمز عبور"
                className="login-form__password-input"
              />
              <i class="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <Btn
              className="login-form__btn"
              type="submit"
              disable={false}
              onClick={registerNewUser}
            >
              <i class="login-form__btn-icon fa fa-user-plus"></i>
              <span class="login-form__btn-text">عضویت</span>
            </Btn>
          </form>
          <div class="login__des">
            <span class="login__des-title">سلام کاربر محترم:</span>
            <ul class="login__des-list">
              <li class="login__des-item">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li class="login__des-item">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li class="login__des-item">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <TheFooter />
    </>
  );
}
