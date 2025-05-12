import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

import "./Style/reset.css";
import "./Style/fonts.css";
import "./Style/variables.css";
import "./Style/defaults.css";
import "./Style/helpers.css";

function App() {
  const router = useRoutes(routes);

  return <>{router}</>;
}

export default App;
