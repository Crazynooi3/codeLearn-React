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
      <section className="login-register">
        <div className="login register-form">
          <span className="login__title">ساخت حساب کاربری</span>
          <span className="login__subtitle">
            خوشحالیم قراره به جمع ما بپیوندی
          </span>
          <div className="login__new-member">
            <span className="login__new-member-text">
              قبلا ثبت‌نام کرده‌اید؟{" "}
            </span>
            <Btn classNameName="login__new-member-link" to="/login">
              وارد شوید
            </Btn>
          </div>
          <form action="#" className="login-form">
            <div className="login-form__username">
              <Input
                element="input"
                id="name"
                type="text"
                placeholder="نام و نام خانوادگی"
                classNameName="login-form__username-input"
                validations={[
                  requireRule(),
                  minLengthRule(8),
                  maxLengthRule(20),
                ]}
                onInputChange={onInputChange}
                formState={formState}
                errors={formState.inputs.name.errors}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>

            <div className="login-form__username">
              <Input
                element="input"
                id="username"
                type="text"
                placeholder="نام کاربری"
                classNameName="login-form__username-input"
                validations={[
                  requireRule(),
                  minLengthRule(8),
                  maxLengthRule(20),
                ]}
                onInputChange={onInputChange}
                formState={formState} // پاس دادن formState
                errors={formState.inputs.username.errors}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>

            <div className="login-form__password">
              <Input
                element="input"
                type="email"
                id="email"
                placeholder="آدرس ایمیل"
                classNameName="login-form__password-input"
                validations={[requireRule(), emailRule()]}
                onInputChange={onInputChange}
                formState={formState} // پاس دادن formState
                errors={formState.inputs.email.errors}
              />
              <i className="login-form__password-icon fa fa-envelope"></i>
            </div>
            <div className="login-form__password">
              <Input
                element="input"
                id="password"
                type="password"
                placeholder="رمز عبور"
                classNameName="login-form__password-input"
                validations={[
                  requireRule(),
                  minLengthRule(8),
                  maxLengthRule(18),
                ]}
                onInputChange={onInputChange}
                formState={formState}
                errors={formState.inputs.password.errors}
              />
              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <div className="login-form__password">
              <Input
                element="input"
                id="confirmPassword"
                type="password"
                placeholder="تکرار رمزعبور"
                classNameName="login-form__password-input"
                validations={[requireRule(), confirmPasswordRule()]}
                onInputChange={onInputChange}
                formState={formState}
                errors={formState.inputs.confirmPassword.errors}
              />
              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <Btn
              classNameName={`login-form__btn ${
                formState.isFormValid
                  ? "login-form__btn_success"
                  : "login-form__btn_disabled "
              }`}
              type="submit"
              disabled={!formState.isFormValid}
              onClick={registerNewUser}
            >
              <i className="login-form__btn-icon fa fa-user-plus"></i>
              <span className="login-form__btn-text">عضویت</span>
            </Btn>
          </form>
          <div className="login__des">
            <span className="login__des-title">سلام کاربر محترم:</span>
            <ul className="login__des-list">
              <li className="login__des-item">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li className="login__des-item">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li className="login__des-item">
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
