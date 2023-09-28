import React, { useState, useEffect } from "react";
import bg from "../assets/images/bg-01.jpg";
import "../assets/css/main.css";

const Register = ({ controlador, setControlador }) => {
  console.log(controlador);
  const registrarse = e => {
    e.preventDefault();
    if (
      e.target.tipodocumento.value.length == 0 ||
      e.target.numeroDocumento.value.length > 0 ||
      e.target.nombreUno.value.length < 8 ||
      e.target.ombreDos.value.length < 8 ||
      e.target.apellidoUno.value.length < 8 ||
      e.target.apellidoDos.value.length < 8 ||
      e.target.correo.value.length < 8 ||
      e.target.telefono.value.length < 8 ||
      e.target.direccion.value.length < 8 ||
      e.target.ciudad.value.length < 8 ||
      e.target.user.value.length < 8 ||
      e.target.contraeña.value.length < 8 ||
      e.target.ocupacion.value.length < 8 ||
      e.target.numeroDocumento.value.length < 8
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Verifica tus datos, recuerda que tu contraseña debe tener como mínimo 8 caracteres y debes de proporcionar un correo valido",
      });
    } else {
      fetch("http://localhost:3000/mujeres/crear", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          tipodocumento: e.target.tipoDocumento.value,
          numeroDocumento: e.target.numeroDocumento.value,
          nombreUno: e.target.nombreUno.value,
          nombreDos: e.target.nombreDos.value,
          apellidoUno: e.target.apellidoUno.value,
          apellidoDos: e.target.apellidoDos.value,
          telefono: e.target.telefono.value,
          ciudad: e.target.ciudad.value,
          localidad: e.target.localidad.value,
          direccion: e.target.direccion.value,
          correo: e.target.correo.value,
          contrasena: e.target.contrasena.value,
          usuario: e.target.usuario.value,
          ocupacion: e.target.ocupacion.value,
        }),
      })
        .then(response => {
          return response.json();
        })
        .then(response => {
          console.log(response);
          if (response.res.length > 0) {
            let documento = e.target.documento.value;
            let tipodocumento = e.target.tipodocumento.value;
            let nombreUno = e.target.nombreUno.valiue;
            let nombreDos = e.target.nombreDos.value;
            let apellidoUno = e.apellidoUno;

            let correo = e.target.emailRegistro.value;
            let password = e.target.passRegistro.value;
            fetch(urlApi, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                email: email,
                password: password,
              }),
            })
              .then(response => {
                return response.json();
              })
              .then(response => {
                if (response.status === "OK") {
                  Swal.fire(
                    "Felicitaciones!",
                    "Usuario registrado satisfactoriamente, te enviamos una verificacion a tu correo electronico",
                    "success"
                  );
                  setTimeout(() => {
                    window.location = "index.html";
                  }, 3000);
                } else {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Error en la insercion",
                  });
                }
              });
          }
        });
    }
  };
  return (
    <>
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundImage: `url(` + bg + `)` }}
        >
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form
              className="login100-form validate-form"
              onSubmit={registrarse}
            >
              <div className="text-center">
                <img
                  src="./src/assets/images/ICON.png"
                  alt=""
                  style={{ width: "6rem" }}
                />
              </div>
              <span className="login100-form-title p-b-49">Registro</span>

              <div
                className="wrap-input100 validate-input m-b-23"
                data-validate="Username is reauired"
              >
                <span className="label-input100">Tipo de Documento</span>
                <input
                  className="input100"
                  type="text"
                  name="tipodocumento"
                  id="tipodocumento"
                  placeholder="Tipo de Dcocumento"
                />
                <span className="focus-input100" data-symbol="&#xf206;"></span>
              </div>
              <div
                className="wrap-input100 validate-input m-b-23"
                data-validate="Username is reauired"
              >
                <div
                  className="wrap-input100 validate-input m-b-23"
                  data-validate="Username is reauired"
                >
                  <span className="label-input100">Numero de documento</span>
                  <input
                    className="input100"
                    type="text"
                    name="numeroDocumento"
                    id="numeroDocumento"
                    placeholder="Numero de documento"
                  />
                  <span
                    className="focus-input100"
                    data-symbol="&#xf206;"
                  ></span>
                </div>

                <div
                  className="wrap-input100 validate-input m-b-23"
                  data-validate="Username is reauired"
                >
                  <span className="label-input100">Nombre Uno</span>
                  <input
                    className="input100"
                    type="text"
                    name="nombreUno"
                    id="nombreUno"
                    placeholder="Nombre Uno"
                  />
                  <span
                    className="focus-input100"
                    data-symbol="&#xf206;"
                  ></span>
                </div>

                <div
                  className="wrap-input100 validate-input m-b-23"
                  data-validate="Username is reauired"
                >
                  <span className="label-input100">Nombre Dos</span>
                  <input
                    className="input100"
                    type="text"
                    name="nombreDos"
                    id="nombreDos"
                    placeholder="Nombre Dos"
                  />
                  <span
                    className="focus-input100"
                    data-symbol="&#xf206;"
                  ></span>
                </div>

                <div
                  className="wrap-input100 validate-input m-b-23"
                  data-validate="Username is reauired"
                >
                  <span className="label-input100">Apellido Uno</span>
                  <input
                    className="input100"
                    type="text"
                    name="apellidoUno"
                    id="apellidoUno"
                    placeholder="Apellido Uno"
                  />
                  <span
                    className="focus-input100"
                    data-symbol="&#xf206;"
                  ></span>
                </div>

                <div
                  className="wrap-input100 validate-input m-b-23"
                  data-validate="Username is reauired"
                >
                  <span className="label-input100">Apellido Dos</span>
                  <input
                    className="input100"
                    type="text"
                    name="apelldoDos"
                    id="apelldoDos"
                    placeholder="Apellido Dos"
                  />
                  <span
                    className="focus-input100"
                    data-symbol="&#xf206;"
                  ></span>
                </div>

                <div
                  className="wrap-input100 validate-input m-b-23"
                  data-validate="Username is reauired"
                >
                  <span className="label-input100">Correo</span>
                  <input
                    className="input100"
                    type="text"
                    name="correo"
                    id="correo"
                    placeholder="Correo"
                  />
                  <span
                    className="focus-input100"
                    data-symbol="&#xf206;"
                  ></span>
                </div>

                <span className="label-input100">User</span>
                <input
                  className="input100"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="User"
                />
                <span className="focus-input100" data-symbol="&#xf206;"></span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <span className="label-input100">Contraseña</span>
                <input
                  className="input100"
                  type="password"
                  name="contrasena"
                  id="contrasena"
                  placeholder="Contraseña"
                />
                <span className="focus-input100" data-symbol="&#xf190;"></span>
              </div>

              <div
                className="wrap-input100 validate-input m-b-23"
                data-validate="Username is reauired"
              >
                <span className="label-input100"> Telefono</span>
                <input
                  className="input100"
                  type="text"
                  name="telefono"
                  id="telefono"
                  placeholder="Telefono"
                />
                <span className="focus-input100" data-symbol="&#xf206;"></span>
              </div>

              <div
                className="wrap-input100 validate-input m-b-23"
                data-validate="Username is reauired"
              >
                <span className="label-input100">Cuidad</span>
                <input
                  className="input100"
                  type="text"
                  name="ciudad"
                  id="ciudad"
                  placeholder="Ciudadr"
                />
                <span className="focus-input100" data-symbol="&#xf206;"></span>
              </div>

              <div
                className="wrap-input100 validate-input m-b-23"
                data-validate="Username is reauired"
              >
                <span className="label-input100">Localidad</span>
                <input
                  className="input100"
                  type="text"
                  name="localidad"
                  id="localidad"
                  placeholder="Localidad"
                />
                <span className="focus-input100" data-symbol="&#xf206;"></span>
              </div>

              <div
                className="wrap-input100 validate-input m-b-23"
                data-validate="Username is reauired"
              >
                <span className="label-input100">Ocupación</span>
                <input
                  className="input100"
                  type="text"
                  name="ocupacion"
                  id="ocupacion"
                  placeholder="Ocupación"
                />
                <span className="focus-input100" data-symbol="&#xf206;"></span>
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
