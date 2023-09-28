import React, { useState, useEffect } from "react";
import bg from "../assets/images/bg-01.jpg";

const Login = ({ controlador, setControlador, login, setLogin }) => {
  const iniciar = (e) => {
    e.preventDefault;
    setLogin(1);
  };
  return (
    <>
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundImage: `url(` + bg + `)` }}
        >
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form className="login100-form validate-form" onSubmit={iniciar}>
              <div className="text-center">
                {" "}
                <img
                  src="./src/assets/images/ICON.png"
                  alt=""
                  style={{ width: "6rem" }}
                />
              </div>

              <span className="login100-form-title p-b-49">
                Inicio de Sesión
              </span>

              <div
                className="wrap-input100 validate-input m-b-23"
                data-validate="Username is reauired"
              >
                <span className="label-input100">Username</span>
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="Type your username"
                />
                <span className="focus-input100" data-symbol="&#xf206;"></span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <span className="label-input100">Password</span>
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Type your password"
                />
                <span className="focus-input100" data-symbol="&#xf190;"></span>
              </div>

              <div className="text-right p-t-8 p-b-31">
                <a href="#">Olvido su contraseña?</a>
              </div>

              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <input
                    type="submit"
                    className="login100-form-btn"
                    value={"Login"}
                  />
                </div>
              </div>

              <div className="txt1 text-center p-t-54 p-b-20">
                <span>Desea Registrarse?</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
