import React, { useState, useEffect } from "react";

const EditarEstablecimiento = () => {
  return (
    <>
      <div className="offcanvas-body">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Nombre Establecimineto
          </label>
          <input
            type="text"
            className="form-control"
            id="nombreEstablecimiento"
            name="nombreEstablecimiento"
            placeholder="Nombre Establecimiento"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Responsable Establecimiento
          </label>
          <input
            type="text"
            className="form-control"
            id="responsableEstablecimiento"
            name="responsableEstablecimiento"
            placeholder="Responsable Establecimiento"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Dirección Establecimiento
          </label>
          <input
            type="text"
            className="form-control"
            id="direccionEstableimiento"
            name="direccionEstableimiento"
            placeholder="Dirección Establecimiento"
          />
        </div>

        <button type="button" class="btn btn-info">
          Editar Municipio
        </button>
      </div>
    </>
  );
};

export default EditarEstablecimiento;