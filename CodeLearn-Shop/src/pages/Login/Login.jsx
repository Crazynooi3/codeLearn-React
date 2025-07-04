import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

import "./Login.css";

import {
  requireRule,
  minLengthRule,
  maxLengthRule,
} from "../../Validators/InputRules";

import { useForm } from "../../Hooks/useForm";
import AuthContext from "../../contexts/authContext";

import TheFooter from "../../components/base/TheFooter/TheFooter";
import TheTopBar from "../../components/base/TheTopBar/TheTopBar";
import TheNavBar from "../../components/base/TheNavBar/TheNavBar";
import Input from "../../components/Form/Input";
import Btn from "../../components/Form/Btn";

export default function Login() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [isCaptcha, setIsCaptcha] = useState(false);

  const [formState, onInputChange] = useForm(
    // use inputID for key of this object
    {
      username: {
        value: "",
        isValid: false,
        errors: [],
      },
      password: {
        value: "",
        isValid: false,
        errors: [],
      },
    },
    false
  );

  // console.log(authContext);

  const loginNewUser = (event) => {
    event.preventDefault();

    let userData = {
      identifier: formState.inputs.username.value,
      password: formState.inputs.password.value,
    };
    fetch("http://localhost:3000/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          // console.log(data);

          authContext.login(data.user, data.accessToken);
          navigate("/");
        } else {
          console.log(data);
        }
      })
      .catch((err) => console.log(err));
  };

  const onChangeHandler = () => {
    setIsCaptcha(true);
  };
  return (
    <>
      <TheTopBar />
      <TheNavBar />

      <section class="login-register">
        <div class="login">
          <span class="login__title">ورود به حساب کاربری</span>
          <span class="login__subtitle">
            خوشحالیم دوباره میبینیمت دوست عزیز :)
          </span>
          <div class="login__new-member">
            <span class="login__new-member-text">کاربر جدید هستید؟</span>
            <Btn to="/signup" className="login__new-member-link">
              ثبت نام
            </Btn>
          </div>
          <form action="#" class="login-form">
            <div class="login-form__username">
              <Input
                element="input"
                id={"username"}
                type="text"
                placeholder="نام کاربری یا آدرس ایمیل"
                className="login-form__username-input"
                validations={[
                  requireRule(),
                  minLengthRule(8),
                  maxLengthRule(20),
                ]}
                onInputChange={onInputChange}
              />
              <i class="login-form__username-icon fa fa-user"></i>
            </div>
            <div class="login-form__password">
              <Input
                element="input"
                id={"password"}
                type="password"
                placeholder="رمز عبور"
                className="login-form__password-input"
                validations={[
                  requireRule(),
                  minLengthRule(8),
                  maxLengthRule(20),
                ]}
                onInputChange={onInputChange}
              />
              <i class="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChangeHandler}
            />
            ,
            <Btn
              className={`login-form__btn ${
                formState.isFormValid && isCaptcha
                  ? "login-form__btn_success"
                  : "login-form__btn_disabled "
              }`}
              type="submit"
              disabled={!formState.isFormValid}
              onClick={loginNewUser}
            >
              <i class="login-form__btn-icon fas fa-sign-out-alt"></i>
              <span class="login-form__btn-text">ورود</span>
            </Btn>
            <div class="login-form__password-setting">
              <label class="login-form__password-remember">
                <input class="login-form__password-checkbox" type="checkbox" />
                <span class="login-form__password-text">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label class="login-form__password-forget">
                <a class="login-form__password-forget-link" href="#">
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
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
