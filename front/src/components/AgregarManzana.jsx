import React, { useState, useEffect } from "react";

const AgregarManzana = () => {
  return (
    <>
      <div className="offcanvas-body">
        <form action="">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Nombre Manzana
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreManzana"
              name="nombreManzana"
              placeholder="Nombre Manzana"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              localidad Manzana
            </label>
            <input
              type="text"
              className="form-control"
              id="localidadManzana"
              name="localidadManzana"
              placeholder="Localidad Manzana"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Dirección Manzana
            </label>
            <input
              type="text"
              className="form-control"
              id="direccionManzana"
              name="direccionManzana"
              placeholder="Dirección Manzana"
            />
          </div>

          <button type="button" class="btn btn-info">
            Agregar Municipio
          </button>
        </form>
      </div>
    </>
  );
};

export default AgregarManzana;
