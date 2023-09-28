import React, { useState, useEffect } from "react";

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";

import Navbar from "./Navbar";
import Municipios from "./Municipio";
import Establecimientos from "./Establecimientos";
import Mujeres from "./Mujeres";
import Manzanas from "./Manzanas";
import Servicios from "./Servicios";
import Inicio from "./Inicio";

const IndexBase = ({ login, setLogin }) => {
  const [controladorNavbar, setControladorNavbar] = useState(0);

  return (
    <>
      <Navbar
        login={login}
        setLogin={setLogin}
        controladorNavbar={controladorNavbar}
        setControladorNavbar={setControladorNavbar}
      ></Navbar>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {controladorNavbar == 0 ? (
              <>
                <Inicio />
              </>
            ) : controladorNavbar == 1 ? (
              <>
                <Municipios />
              </>
            ) : controladorNavbar == 2 ? (
              <>
                <Servicios />
              </>
            ) : controladorNavbar == 3 ? (
              <>
                <h1>Categoria</h1>
              </>
            ) : controladorNavbar == 4 ? (
              <>
                <Establecimientos />
              </>
            ) : controladorNavbar == 5 ? (
              <>
                <Mujeres />
              </>
            ) : controladorNavbar == 6 ? (
              <>
                <Manzanas />
              </>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="col-12"></div>
      </div>
    </>
  );
};

export default IndexBase;
