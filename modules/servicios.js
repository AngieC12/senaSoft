//modulo para servicios

const express = require("express");
const cors = require("cors"); // para evitar restricciones entre llamadas de sitios
const servicio = express.Router(); // trae el metodo router de express para hacer los endpoint  http://www.misitio.com/api/clients
const conex = require("./bddatos");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const secret = process.env.secret;
const jwt = require("jsonwebtoken");
const { promisify } = require("util"); //la trae por defecto node js me permite usar async/await opcion a fetch
//const url_permitida = "http://127.0.0.1:5500"; //evitar el error de politicas de cors
//middlewares requeridos
//middlewares: logica de intercambio entre las aplicaciones, traductor de datos entre aplicaciones distribuidas
servicio.use(express.json()); //serializa la data en JSON
servicio.use(cors());
servicio.options("*", cors());

// construimos los endpoint

// listar todos los servicios usamos el GET
servicio.get("/servicios", async (req, res) => {
  try {
    await conex.query(
      "SELECT idservicios, nombreServicio,descripcion FROM servicios",
      (error, respuesta) => {
        console.log(respuesta);
        res.send(respuesta);
      }
    );
  } catch (error) {
    // throw error;
    console.log(error);
  }
});
//lista un solo servicio(id)
servicio.get("/servicios/:idservicios", async (req, res) => {
  let id = req.params.id;
  try {
    conex.query(
      "SELECT idservicios, nombreServicio,descripcion FROM servicios where idservicios = ?",
      id,
      (error, respuesta) => {
        console.log(respuesta);
        res.send(respuesta);
      }
    );
  } catch (error) {
    // throw error;
    console.log(error);
  }
});
//insertar un servicio
servicio.post("/servicios/agregar", async (req, res) => {
  try {
    let data = {
      idservicios: req.body.idservicios,
      nombreServicio: req.body.nombreServicio,
      descripcion: req.body.descripcion,
    };

    let consulta = await conex.query(
      "INSERT INTO servicios SET ?",
      data,
      (error, respuesta) => {
        if (error) {
          res.status(505).json({
            mensaje: "error",
            respuesta: error,
          });
        } else {
          res.status(200).json({
            mensaje: "OK",
            respuesta: respuesta,
          });
        }
      }
    );
  } catch (error) {
    res.send.status(404).json({
      code: error.code,
      mensaje: error.message,
    });
  }
});
servicio.put("/servicios", async (req, res) => {
  try {
    let data = {
      //idservicios : req.body.idservicios,
      nombreServicio: req.body.nombreServicio,
      descripcion: req.body.descripcion,
    };
    conex.query(
      "UPDATE servicios SET ? where id = ?",
      [data],
      (error, respuesta) => {
        //console.log(respuesta);
        res.send(" Actualizacion Exitosa!");
      }
    );
  } catch (error) {
    console.log(error);
    console.log.status(404).error;
  }
});
// Verbo DELETE = Borrar
servicio.delete("/servicios/:idservicios", async (req, res) => {
  letvid = req.params.id;
  conex.query("DELETE FROM servicios where idservicios = ?", id),
    (error, respuesta) => {
      if (error) {
        console.log(error);
      } else {
        res.status(201).send(respuesta);
      }
    };
});
module.exports = servicio;
