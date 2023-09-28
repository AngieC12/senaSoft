import React, { useState, useEffect } from "react";
import AgregarMunicipio from "./AgregarMunicipio";
import EditarMunicipio from "./EditarMunicipio";

const Municipios = () => {
  const eliminarMunicipio = () => {
    Swal.fire({
      title: "Desea Eliminar el Municipio?",
      text: "ELiminar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Municipio Eliminado", "success");
      }
    });
  };
  return (
    <>
      <div className="row">
        <div className="col-2">
          <button
            style={{ backgroundColor: "#b358ca", color: "white" }}
            class="btn mt-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            Agregar Municipio
          </button>
        </div>
        <div className="col-2 ">
          <button type="button" class="btn btn-info mt-3">
            Reporte
          </button>
        </div>
      </div>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">
            Agregar Municipio
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <AgregarMunicipio />
      </div>

      {/*Inicia tablas */}
      <table class="table mt-5">
        <thead>
          <tr>
            <th scope="col">Departamento</th>
            <th scope="col">Munnicipio</th>
            <th scope="col">Manzanas</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button
                type="button"
                class="btn btn-secondary mt-3"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <i class="bi bi-pencil-square"></i>
              </button>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-danger mt-3 bi bi-trash3-fill "
                onClick={eliminarMunicipio}
              ></button>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">
            Editar Municipio
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <EditarMunicipio />
      </div>
    </>
  );
};

export default Municipios;
