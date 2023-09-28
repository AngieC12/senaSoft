//modulo para establecimientos

const express = require("express");
const cors = require("cors"); // para evitar restricciones entre llamadas de sitios
const establecimiento = express.Router(); // trae el metodo router de express para hacer los endpoint  http://www.misitio.com/api/clients
const conex = require("./bddatos");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const secret = process.env.secret;
const jwt = require("jsonwebtoken");
const { promisify } = require("util"); //la trae por defecto node js me permite usar async/await opcion a fetch
//const url_permitida = "http://127.0.0.1:5500"; //evitar el error de politicas de cors
//middlewares requeridos
//middlewares: logica de intercambio entre las aplicaciones, traductor de datos entre aplicaciones distribuidas
establecimiento.use(express.json()); //serializa la data en JSON
establecimiento.use(cors());
establecimiento.options("*", cors());

// construimos los endpoint

// listar todos los establecimientos, usamos el GET
establecimiento.get("/establecimientos", async (req, res) => {
  try {
    await conex.query(
      "SELECT idestablecimiento,nombreEstablecimiento,responsableEstablecimiento,direccionEstablecimiento FROM establecimiento",
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
//listar un solo establecimiento(id)
establecimiento.get(
  "/establecimientos/:idestablecimiento",
  async (req, res) => {
    let id = req.params.id;
    try {
      conex.query(
        "SELECT idestablecimiento, nombreEstablecimiento,responsableEstablecimiento,direccionEstablecimiento FROM asistencia where idestablecimiento = ?",
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
  }
);
//insertar un establecimiento
establecimiento.post("/establecimientos/agregar", async (req, res) => {
  try {
    let data = {
      idestablecimiento: req.body.idestablecimiento,
      nombreEstablecimiento: req.body.nombreEstablecimiento,
      responsableEstablecimiento: req.body.responsableEstablecimiento,
      direccionEstablecimiento: req.body.direccionEstablecimiento,
    };

    let consulta = await conex.query(
      "INSERT INTO establecimiento SET ?",
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

//editar / actualizar el establecimiento
establecimiento.put("/establecimientos/idestablecimiento", async (req, res) => {
  try {
    let idmujeres = req.params.idmujeres;
    let data = {
      nombreEstablecimiento: req.body.nombreEstablecimiento,
      responsableEstablecimiento: req.body.responsableEstablecimiento,
      direccionEstablecimiento: req.body.direccionEstablecimiento,
    };
    conex.query(
      "UPDATE establecimientos SET ? where idestablecimientos = ?",
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
// Verbo DELETE = Borrar asistencia
establecimiento.delete(
  "/establecimientos/:idestablecimientos",
  async (req, res) => {
    letvid = req.params.id;
    conex.query(
      "DELETE FROM establecimientos where idestablecimientos = ?",
      id
    ),
      (error, respuesta) => {
        if (error) {
          console.log(error);
        } else {
          res.status(201).send(respuesta);
        }
      };
  }
);
module.exports = establecimiento;
