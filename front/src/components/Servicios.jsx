import React, { useState, useEffect } from "react";

const Servicios = () => {
  const eliminarManzana = () => {
    Swal.fire({
      title: "Desea Eliminar el Servicio?",
      text: "ELiminar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Servicio Eliminado", "success");
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
            Agregar Servicio
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
            Agregar Servicio
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <AgregarServicio />
      </div>

      {/*Inicia tablas */}
      <table class="table mt-5">
        <thead>
          <tr>
            <th scope="col">Nombre Manzana</th>
            <th scope="col">Localidad Manzana</th>
            <th scope="col">Dirección Manzana</th>
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
                onClick={eliminarManzana}
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
            Editar Servico
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <EditarServicio />
      </div>
    </>
  );
};

export default Servicios;
