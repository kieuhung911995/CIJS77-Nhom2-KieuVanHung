import React from "react";
import { useState } from "react";
import Login from "./component/Login";
import FailLogin from "./component/FailLogin";
import DashBoard from "./component/DashBoard";
const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isFailLogin, setIsFailLogin] = useState(false);

  return (
    <>
      <h1>Welcome to React Vite Micro App!</h1>
      {isLogin === true ? (
        <Login setIsLogin={setIsLogin} setIsFailLogin={setIsFailLogin} />
      ) : null}
      {/*if (isLogin === true) {<Login setIsLogin={setIsLogin}} else {null} */}
      {isLogin === false ? <DashBoard /> : null}
      {isFailLogin === true ? <FailLogin /> : null}
    </>
  );
};
export default App;
