import React, { useState, useEffect } from "react";

const AgregarMunicipio = () => {
  return (
    <>
      <div className="offcanvas-body">
        <form action="">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Departamento
            </label>
            <input
              type="text"
              className="form-control"
              id="departamento"
              placeholder="Departamento"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Municipio
            </label>
            <input
              type="text"
              className="form-control"
              id="municipio"
              placeholder="Municipio"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Manzana
            </label>
            <input
              type="text"
              className="form-control"
              id="manzana"
              placeholder="Manzana"
            />
          </div>
        </form>
        <button type="button" class="btn btn-info">
          Agregar Municipio
        </button>
      </div>
    </>
  );
};

export default AgregarMunicipio;
