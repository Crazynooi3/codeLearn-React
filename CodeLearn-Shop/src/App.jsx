import React, { useCallback, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import AuthContext from "./contexts/authContext";

import "./Style/reset.css";
import "./Style/fonts.css";
import "./Style/variables.css";
import "./Style/defaults.css";
import "./Style/helpers.css";

function App() {
  const router = useRoutes(routes);
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(null);
  const [userInfos, setUserInfos] = useState({});

  const login = useCallback((userInfos, token) => {
    // console.log(token);

    setToken(token);
    setIsLogin(true);
    setUserInfos(userInfos);
    localStorage.setItem("token", token);
  }, []);

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      fetch("http://localhost:3000/v1/auth/me", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          setIsLogin(true);
          setUserInfos(userData);
        });
    }
  }, [login]);

  const logout = useCallback(() => {
    setToken(null);
    setUserInfos({});
    localStorage.removeItem("token");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogedin: isLogin,
        token: token,
        userInfos: userInfos,
        login,
        logout,
      }}
    >
      {router}
    </AuthContext.Provider>
  );
}

export default App;
