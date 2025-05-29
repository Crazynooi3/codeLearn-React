import React from "react";
import "./TheHeader.css";
import { useContext } from "react";
import AuthContext from "../../../contexts/authContext";

import TheTopBar from "../TheTopBar/TheTopBar";
import TheNavBar from "../TheNavBar/TheNavBar";
import Landing from "../../Landing/Landing";

export default function TheHeader() {
  const authContext = useContext(AuthContext);

  return (
    <>
      <header class="header">
        <TheTopBar />
        <TheNavBar
          name={authContext.userInfos.name || "کاربر مهمان"}
          islogin={authContext.isLogedin}
          // islogin={}
        />
        <Landing />
      </header>
    </>
  );
}
