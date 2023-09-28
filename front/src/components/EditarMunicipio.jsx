import React, { useState, useEffect } from "react";

const EditarMunicipio = () => {
  return (
    <>
      <div className="offcanvas-body">
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

        <button type="button" class="btn btn-info">
          Editar Municipio
        </button>
      </div>
    </>
  );
};

export default EditarMunicipio;
