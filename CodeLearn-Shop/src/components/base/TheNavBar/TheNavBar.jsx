import React, { useEffect, useState } from "react";
import "./TheNavBar.css";
import { Link, Links } from "react-router-dom";

export default function TheNavBar(props) {
  const [mainHeaderLinks, setMainHeaderLinks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/v1/menus`)
      .then((res) => res.json())
      .then((data) => setMainHeaderLinks(data));
  }, []);

  return (
    <div className="main-header">
      <div className="container-fluid">
        <div className="main-header__content">
          <div className="main-header__right">
            <a href="/">
              <img
                width={"150px"}
                src="/images/logo/CodeLearnLogo.png"
                className="main-header__logo"
                alt="لوگوی کدلرن"
              />
            </a>

            <ul className="main-header__menu">
              <li className="main-header__item">
                <a href="#" className="main-header__link">
                  صفحه اصلی
                </a>
              </li>

              {mainHeaderLinks.map((mainHeader) => (
                <li key={mainHeader.id} className="main-header__item">
                  <Link
                    to={mainHeader.href}
                    href="#"
                    className="main-header__link"
                  >
                    {mainHeader.title}
                    <i className="fas fa-angle-down main-header__link-icon"></i>
                    <ul className="main-header__dropdown">
                      {mainHeader.submenus.map((sub) => (
                        <li key={sub.id} className="main-header__dropdown-item">
                          <Link
                            to={sub.href}
                            className="main-header__dropdown-link"
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="main-header__left">
            <a href="#" className="main-header__search-btn">
              <i className="fas fa-search main-header__search-icon"></i>
            </a>
            <a href="#" className="main-header__cart-btn">
              <i className="fas fa-shopping-cart main-header__cart-icon"></i>
            </a>
            {props.islogin ? (
              <a href="#" className="main-header__profile">
                <span className="main-header__profile-text">{props.name}</span>
              </a>
            ) : (
              <Link to={"/login"} href="#" className="main-header__profile">
                <span className="main-header__profile-text">ورود/ثبت نام</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
