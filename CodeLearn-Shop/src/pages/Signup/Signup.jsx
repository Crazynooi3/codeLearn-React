import React, { useContext } from "react";
import "./Signup.css";

import {
  requireRule,
  minLengthRule,
  maxLengthRule,
  emailRule,
  confirmPasswordRule,
} from "../../Validators/InputRules";
import { useForm } from "../../Hooks/useForm";
import AuthContext from "../../contexts/authContext";

import TheTopBar from "../../components/base/TheTopBar/TheTopBar";
import TheNavBar from "../../components/base/TheNavBar/TheNavBar";
import TheFooter from "../../components/base/TheFooter/TheFooter";
import Input from "../../components/Form/Input";
import Btn from "../../components/Form/Btn";

export default function Signup() {
  const authContext = useContext(AuthContext);
  console.log(authContext);

  const [formState, onInputChange] = useForm(
    {
      name: {
        value: "",
        isValid: false,
        errors: [],
      },
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
      confirmPassword: {
        value: "",
        isValid: false,
        errors: [],
      },
      email: {
        value: "",
        isValid: false,
        errors: [],
      },
    },
    false
  );

  const registerNewUser = (event) => {
    event.preventDefault();

    const newUserData = {
      name: formState.inputs.name.value,
      username: formState.inputs.username.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
      confirmPassword: formState.inputs.confirmPassword.value,
    };

    fetch("http://localhost:3000/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    })
      .then((res) => res.json())
      .then((data) => authContext.login(data.user, data.accessToken));

    // console.log("new register Token:", data.accessToken);
  };
  // console.log(formState.inputs.password.errors);

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
                id="name"
                type="text"
                placeholder="نام و نام خانوادگی"
                className="login-form__username-input"
                validations={[
                  requireRule(),
                  minLengthRule(8),
                  maxLengthRule(20),
                ]}
                onInputChange={onInputChange}
                formState={formState}
                errors={formState.inputs.name.errors}
              />
              <i class="login-form__username-icon fa fa-user"></i>
            </div>

            <div class="login-form__username">
              <Input
                element="input"
                id="username"
                type="text"
                placeholder="نام کاربری"
                className="login-form__username-input"
                validations={[
                  requireRule(),
                  minLengthRule(8),
                  maxLengthRule(20),
                ]}
                onInputChange={onInputChange}
                formState={formState} // پاس دادن formState
                errors={formState.inputs.username.errors}
              />
              <i class="login-form__username-icon fa fa-user"></i>
            </div>

            <div class="login-form__password">
              <Input
                element="input"
                type="email"
                id="email"
                placeholder="آدرس ایمیل"
                className="login-form__password-input"
                validations={[requireRule(), emailRule()]}
                onInputChange={onInputChange}
                formState={formState} // پاس دادن formState
                errors={formState.inputs.email.errors}
              />
              <i class="login-form__password-icon fa fa-envelope"></i>
            </div>
            <div class="login-form__password">
              <Input
                element="input"
                id="password"
                type="password"
                placeholder="رمز عبور"
                className="login-form__password-input"
                validations={[
                  requireRule(),
                  minLengthRule(8),
                  maxLengthRule(18),
                ]}
                onInputChange={onInputChange}
                formState={formState}
                errors={formState.inputs.password.errors}
              />
              <i class="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <div class="login-form__password">
              <Input
                element="input"
                id="confirmPassword"
                type="password"
                placeholder="تکرار رمزعبور"
                className="login-form__password-input"
                validations={[requireRule(), confirmPasswordRule()]}
                onInputChange={onInputChange}
                formState={formState}
                errors={formState.inputs.confirmPassword.errors}
              />
              <i class="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <Btn
              className={`login-form__btn ${
                formState.isFormValid
                  ? "login-form__btn_success"
                  : "login-form__btn_disabled "
              }`}
              type="submit"
              disabled={!formState.isFormValid}
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
