import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./login.scss";

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent) //
      .then(console.log);
  };
  return (
    <section className="login">
      <Header />
      <section>
        <h1>Login</h1>
        <ul className="list">
          <li className="item">
            <button onClick={onLogin} className="button">
              Google
            </button>
          </li>
          <li className="item">
            <button onClick={onLogin} className="button">
              Github
            </button>
          </li>
          {/* <li>
            <button onClick={onLogin}>Facebook</button>
          </li> */}
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
