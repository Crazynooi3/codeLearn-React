import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TheTopBar.css";

export default function TheTopBar() {
  const [topBarLinks, setTopBarLinks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/v1/menus/topbar`)
      .then((res) => res.json())
      .then((data) => {
        setTopBarLinks(data);
      });
  }, []);

  const getRandomLinkFromArray = (arr, numRandom) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numRandom);
  };

  return (
    <div className="top-bar">
      <div className="container-fluid">
        <div className="top-bar__content">
          <div className="top-bar__right">
            <ul className="top-bar__menu">
              {getRandomLinkFromArray(topBarLinks, 7).map((link) => (
                <li className="top-bar__item">
                  <Link to={link.href} href="#" className="top-bar__link">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="top-bar__left">
            <div className="top-bar__email">
              <a href="#" className="top-bar__email-text top-bar__link">
                Codelearn@localhost.com
              </a>
              <i className="fas fa-envelope top-bar__email-icon"></i>
            </div>
            <div className="top-bar__phone">
              <a href="#" className="top-bar__phone-text top-bar__link">
                09386119575
              </a>
              <i className="fas fa-phone top-bar__phone-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
