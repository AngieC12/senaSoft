//modulo para asistencias

const express = require("express");
const cors = require("cors"); // para evitar restricciones entre llamadas de sitios
const asistencia = express.Router(); // trae el metodo router de express para hacer los endpoint  http://www.misitio.com/api/clients
const conex = require("./bddatos");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const secret = process.env.secret;
const jwt = require("jsonwebtoken");
const { promisify } = require("util"); //la trae por defecto node js me permite usar async/await opcion a fetch
//const url_permitida = "http://127.0.0.1:5500"; //evitar el error de politicas de cors
//middlewares requeridos
//middlewares: logica de intercambio entre las aplicaciones, traductor de datos entre aplicaciones distribuidas
asistencia.use(express.json()); //serializa la data en JSON
asistencia.use(cors());
asistencia.options("*", cors());

// construimos los endpoint

// listar todas las asistencias, usamos el GET
asistencia.get("/asistencia", async (req, res) => {
  try {
    await conex.query(
      "SELECT idAsistencia, FechaHoraAsistencia FROM asistencia",
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
//listar una sola asistencia(id)
asistencia.get("/asistencia/:idAsistencia", async (req, res) => {
  let id = req.params.id;
  try {
    conex.query(
      "SELECT idAsistencia, FechaHoraAsistencia FROM asistencia where idAsistencia = ?",
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
//insertar una asistencia
asistencia.post("/asistencia/agregar", async (req, res) => {
  try {
    let data = {
      idAsistencia: req.body.idAsistencia,
      FechaHoraAsistencia: req.body.FechaHoraAsistencia,
    };

    let consulta = await conex.query(
      "INSERT INTO asistencia SET ?",
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

//editar / actualizar la asistencia
asistencia.put("/asistencia", async (req, res) => {
  try {
    let data = {
      //idservicios : req.body.idservicios,
      FechaHoraAsistencia: req.body.FechaHoraAsistencia,
    };
    conex.query(
      "UPDATE asistencia SET ? where idAsistencia = ?",
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
asistencia.delete("/asistencia/:idAsistencia", async (req, res) => {
  letvid = req.params.id;
  conex.query("DELETE FROM asistencia where idAsistencia = ?", id),
    (error, respuesta) => {
      if (error) {
        console.log(error);
      } else {
        res.status(201).send(respuesta);
      }
    };
});
module.exports = asistencia;
