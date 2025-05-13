import React, { useState, useEffect } from "react";

export default function LandingCounter({ counter }) {
  const [Counter, setCounter] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCounter((perv) => perv + 1);
    }, 0.1);

    if (Counter >= counter) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [Counter]);
  return (
    <span class="landing-status__count">{Counter.toLocaleString("fa-IR")}</span>
  );
}
