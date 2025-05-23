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
  const [isLogin, setIsLogin] = useState(null);
  const [token, setToken] = useState(null);
  const [userInfos, setUserInfos] = useState(null);

  const login = useCallback((userInfos, token) => {
    setToken(token);
    setIsLogin(true);
    setUserInfos(userInfos);
    localStorage.setItem("token", JSON.stringify({ token }));
  }, []);
  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("token"));
    if (userToken) {
      fetch("http://localhost:3000/v1/auth/me", {
        headers: {
          Authorization: `Bearer ${userToken.token}`,
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
