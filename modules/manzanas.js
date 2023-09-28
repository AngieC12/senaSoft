//modulo para manzanas

const express = require("express");
const cors = require("cors"); // para evitar restricciones entre llamadas de sitios
const manzana = express.Router(); // trae el metodo router de express para hacer los endpoint  http://www.misitio.com/api/clients
const conex = require("./bddatos");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const secret = process.env.secret;
const jwt = require("jsonwebtoken");
const { promisify } = require("util"); //la trae por defecto node js me permite usar async/await opcion a fetch
//const url_permitida = "http://127.0.0.1:5500"; //evitar el error de politicas de cors
//middlewares requeridos
//middlewares: logica de intercambio entre las aplicaciones, traductor de datos entre aplicaciones distribuidas
manzana.use(express.json()); //serializa la data en JSON
manzana.use(cors());
manzana.options("*", cors());

// construimos los endpoint

// listar todas las manzanas, usamos el GET
manzana.get("/manzanas", async (req, res) => {
  try {
    await conex.query(
      "SELECT idManzana, nombreManzana, localidadManzana, direccionManzana FROM tblmanzana",
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
//listar una sola manzana(id)
manzana.get("/tblmanzanas/:idManzana", async (req, res) => {
  let id = req.params.id;
  try {
    conex.query(
      "SELECT idManzana,nombreManzana, direccionManzana, localidadManzada FROM tblmanzana where idManzana  = ?",
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
//insertar una manzana
manzana.post("/tblmanzana/agregar", async (req, res) => {
  try {
    let data = {
      idManzana: req.body.idManzana,
      nombreManzana: req.body.nombreManzana,
      localidadManzana: req.body.localidadManzana,
      direccionManzana: req.body.direccionManzana,
    };

    let consulta = await conex.query(
      "INSERT INTO tblmanzanas SET ?",
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

//editar / actualizar la manzana
manzana.put("/tblmanzana/:idManzana", async (req, res) => {
  try {
    let idManzana = req.params.idManzana;
    let data = {
      //idservicios : req.body.idservicios,

      nombreManzana: req.body.nombreManzana,
      localidadManzana: req.body.localidadManzana,
      direccionManzana: req.body.direccionManzana,
    };
    conex.query(
      "UPDATE tblmanzana SET ? where idManzana = ?",
      [data, idManzana],
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
// Verbo DELETE = Borrar manzana
manzana.delete("/tblmanzana/:idManzana", async (req, res) => {
  letvid = req.params.id;
  conex.query("DELETE FROM tblManzana where idManzana = ?", id),
    (error, respuesta) => {
      if (error) {
        console.log(error);
      } else {
        res.status(201).send(respuesta);
      }
    };
});
module.exports = manzana;
