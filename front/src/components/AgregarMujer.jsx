import React, { useState, useEffect } from "react";

const AgregarMujer = () => {
  return (
    <>
      <div className="offcanvas-body">
        <form action="">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Tipo de Documento
            </label>
            <select class="form-select">
              <option disabled>Tipo de Documento</option>
              <option value="1">Cedula</option>
              <option value="2">Tarjeta de Identidad</option>
              <option value="3">Nit</option>
            </select>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Número de Documento
            </label>
            <input
              type="text"
              className="form-control"
              id="numeroDocumento"
              name="numeroDocumento"
              placeholder="Número Documento"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Nombre Uno
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreUno"
              name="nombreUno"
              placeholder="Nombre Uno"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Nombre Dos
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreDos"
              name="nombreDos"
              placeholder="Nombre Dos"
            />
          </div>{" "}
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Apellido Uno
            </label>
            <input
              type="text"
              className="form-control"
              id="apelidoUno"
              name="apellidoeUno"
              placeholder="Apellido Uno"
            />
          </div>{" "}
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Apellido Dos
            </label>
            <input
              type="text"
              className="form-control"
              id="apellidoDos"
              name="apellidoDos"
              placeholder="Aoellido Dos"
            />
          </div>{" "}
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Telefono
            </label>
            <input
              type="text"
              className="form-control"
              id="telefono"
              name="telefono"
              placeholder="Telefono"
            />
          </div>{" "}
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Correo
            </label>
            <input
              type="text"
              className="form-control"
              id="correo"
              name="correo"
              placeholder="Correo"
            />
          </div>{" "}
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
            />
          </div>{" "}
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              COntraseña
            </label>
            <input
              type="text"
              className="form-control"
              id="contrasena"
              name="contrasena"
              placeholder="Contraeña"
            />
          </div>{" "}
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Ciudad
            </label>
            <input
              type="text"
              className="form-control"
              id="ciudad"
              name="ciudad"
              placeholder="Ciudad"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="direccion"
              name="direccion"
              placeholder="Direccion"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Ocupación
            </label>
            <input
              type="text"
              className="form-control"
              id="ocupacion"
              name="ocupacion"
              placeholder="Ocupación"
            />
          </div>
        </form>
        <button type="button" class="btn btn-info">
          Agregar Mujer
        </button>
      </div>
    </>
  );
};

export default AgregarMujer;
