//modulo para municipios

const express = require("express");
const cors = require("cors"); // para evitar restricciones entre llamadas de sitios
const municipio = express.Router(); // trae el metodo router de express para hacer los endpoint  http://www.misitio.com/api/clients
const conex = require("./bddatos");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const secret = process.env.secret;
const jwt = require("jsonwebtoken");
const { promisify } = require("util"); //la trae por defecto node js me permite usar async/await opcion a fetch
//const url_permitida = "http://127.0.0.1:5500"; //evitar el error de politicas de cors
//middlewares requeridos
//middlewares: logica de intercambio entre las aplicaciones, traductor de datos entre aplicaciones distribuidas
municipio.use(express.json()); //serializa la data en JSON
municipio.use(cors());
municipio.options("*", cors());

// construimos los endpoint

// listar todos los municipios usamos el GET
municipio.get("/municipios", async (req, res) => {
  try {
    await conex.query(
      "SELECT idMunicipios, nombreMunicipio FROM municipios",
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
//lista un solo municipio(id)
municipio.get("/municipios/:idMunicipios", async (req, res) => {
  let id = req.params.id;
  try {
    conex.query(
      "SELECT idMunicipios, nombreMunicipio FROM municipios where idMunicipios = ?",
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
//insertar un municipio
municipio.post("/municipios/agregar", async (req, res) => {
  try {
    let data = {
      idMunicipios: req.body.idMunicipios,
      nombreMunicipio: req.body.nombreMunicipio,
    };

    let consulta = await conex.query(
      "INSERT INTO municipios SET ?",
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

//editar  actualizar el municipio
municipio.put("/municipios", async (req, res) => {
  try {
    let data = {
      //idservicios : req.body.idservicios,
      nombreMunicipio: req.body.nombreMunicipio,
    };
    conex.query(
      "UPDATE municipios SET ? where id = ?",
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
municipio.delete("/municipios/:idMunicipios", async (req, res) => {
  letvid = req.params.id;
  conex.query("DELETE FROM municipios where idMunicipios = ?", id),
    (error, respuesta) => {
      if (error) {
        console.log(error);
      } else {
        res.status(201).send(respuesta);
      }
    };
});
module.exports = municipio;
