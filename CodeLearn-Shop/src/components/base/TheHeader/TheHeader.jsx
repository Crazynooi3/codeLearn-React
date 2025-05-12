import React from "react";
import "./TheHeader.css";

import TheTopBar from "../TheTopBar/TheTopBar";
import TheNavBar from "../TheNavBar/TheNavBar";

export default function TheHeader() {
  return (
    <>
      <header class="header">
        <TheTopBar />
        <TheNavBar />
      </header>
    </>
  );
}
