import React from "react";
import { useState } from "react";
const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const submitEvent = (event) => {
    event.preventDefault();
    if (userName === "admin" && password === "admin") {
      props.setIsLogin(false);
    }
    if (userName !== "admin" || password !== "admin") {
      props.setIsFailLogin(true);
    }
  };
  return (
    <>
      <form action="/action_page.php">
        <label htmlFor="uname">User name:</label>
        <input
          type="text"
          id="uname"
          name="uname"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <br />
        <br />
        <label htmlFor="pword">Password:</label>
        <input
          type="password"
          id="pword"
          name="pword"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <br />
        <input type="submit" value="Submit" onClick={submitEvent} />
      </form>
    </>
  );
};
export default Login;
