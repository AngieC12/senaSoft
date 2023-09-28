import React, { useState, useEffect } from "react";
import AgregarMujer from "./AgregarMujer";
import EditarMujer from "./EditaMujer";
const Mujeres = () => {
  const eliminarMujer = () => {
    Swal.fire({
      title: "Desea Eliminar la Mujer?",
      text: "ELiminar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Mujer Eliminada", "success");
      }
    });
  };
  return (
    <>
      <div className="row">
        <div className="col-2">
          <button
            class="btn mt-3"
            style={{ backgroundColor: "#b358ca", color: "white" }}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            Agregar Mujer
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
            Agregar Mujer
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <AgregarMujer />
      </div>

      {/*Inicia tablas */}
      <table class="table mt-5">
        <thead>
          <tr>
            <th scope="col">Id Mujeres</th>
            <th scope="col">Tipo de Documento</th>
            <th scope="col">Nombre Uno</th>
            <th scope="col">Nombre Dos</th>
            <th scope="col">Apellido Uno</th>
            <th scope="col">Apellido Dos</th>
            <th scope="col">Telefono</th>
            <th scope="col">Correo</th>
            <th scope="col">Usuario</th>
            <th scope="col">Contraseña</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Dirección</th>
            <th scope="col">Ocupación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
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
                onClick={eliminarMujer}
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
            Editar Mujer
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <EditarMujer />
      </div>
    </>
  );
};

export default Mujeres;
