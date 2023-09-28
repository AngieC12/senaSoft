import React, { useState, useEffect } from "react";

const Navbar = ({
  login,
  setLogin,
  controladorNavbar,
  setControladorNavbar,
}) => {
  const alerta = () => {
    Swal.fire({
      title: "¿Desea cerrar sesión?",
      text: "",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then(result => {
      if (result.isConfirmed) {
        //Validacion de cerrar sesión
        setLogin(0);
      }
    });
  };
  return (
    <>
      <nav
        className=" navbar navbar-expand-lg py-lg-0 px-lg-5 wow fadeIn bg-dark"
        data-wow-delay="0.1s"
      >
        <img
          src="./src/assets/images/ICON.png"
          alt=""
          style={{ width: "6rem" }}
        />
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto p-4 p-lg-0">
            <button
              className="nav-item nav-link active"
              onClick={() => {
                controladorNavbar == 0
                  ? setControladorNavbar(0)
                  : setControladorNavbar(0);
              }}
            >
              Inicio
            </button>
            <button
              className="nav-item nav-link "
              onClick={() => {
                controladorNavbar == 1
                  ? setControladorNavbar(0)
                  : setControladorNavbar(1);
              }}
            >
              Municipios
            </button>
            <button
              className="nav-item nav-link "
              onClick={() => {
                controladorNavbar == 2
                  ? setControladorNavbar(0)
                  : setControladorNavbar(2);
              }}
            >
              Servicios
            </button>
            <button
              className="nav-item nav-link "
              onClick={() => {
                controladorNavbar == 3
                  ? setControladorNavbar(0)
                  : setControladorNavbar(3);
              }}
            >
              Categorias
            </button>

            <button
              className="nav-item nav-link "
              onClick={() => {
                controladorNavbar == 4
                  ? setControladorNavbar(0)
                  : setControladorNavbar(4);
              }}
            >
              Establecimientos
            </button>

            <button
              className="nav-item nav-link "
              onClick={() => {
                controladorNavbar == 5
                  ? setControladorNavbar(0)
                  : setControladorNavbar(5);
              }}
            >
              Mujeres
            </button>
            <button
              className="nav-item nav-link "
              onClick={() => {
                controladorNavbar == 6
                  ? setControladorNavbar(0)
                  : setControladorNavbar(6);
              }}
            >
              Manzanas
            </button>
          </div>
          <div className="d-none d-lg-flex">
            <div
              className="flex-shrink-0 btn-lg-square border border-light rounded-circle"
              onClick={alerta}
            >
              <i className="bi bi-person text-primary"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
