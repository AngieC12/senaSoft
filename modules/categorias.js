//modulo para categorias

const express = require("express");
const cors = require("cors"); // para evitar restricciones entre llamadas de sitios
const categoria = express.Router(); // trae el metodo router de express para hacer los endpoint  http://www.misitio.com/api/clients
const conex = require("./bddatos");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const secret = process.env.secret;
const jwt = require("jsonwebtoken");
const { promisify } = require("util"); //la trae por defecto node js me permite usar async/await opcion a fetch
//const url_permitida = "http://127.0.0.1:5500"; //evitar el error de politicas de cors
//middlewares requeridos
//middlewares: logica de intercambio entre las aplicaciones, traductor de datos entre aplicaciones distribuidas
categoria.use(express.json()); //serializa la data en JSON
categoria.use(cors());
categoria.options("*", cors());

// construimos los endpoint

// listar todas las categorias, usamos el GET
categoria.get("/categorias", async (req, res) => {
  try {
    await conex.query(
      "SELECT idCategoria, nombreCategoria FROM categorias",
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
//listar una sola categoria(id)
categoria.get("/categorias/:idCategoria", async (req, res) => {
  let id = req.params.id;
  try {
    conex.query(
      "SELECT idCategoria, nombreCategoria FROM categorias where idCategoria = ?",
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
//insertar una categoria
categoria.post("/categorias/agregar", async (req, res) => {
  try {
    let data = {
      idCategoria: req.body.idCategoria,
      nombreCategoria: req.body.nombreCategoria,
    };

    let consulta = await conex.query(
      "INSERT INTO categorias SET ?",
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

//editar / actualizar la categoria
categoria.put("/categorias", async (req, res) => {
  try {
    let data = {
      //idservicios : req.body.idservicios,
      nombreCategoria: req.body.nombreCategoria,
    };
    conex.query(
      "UPDATE categorias SET ? where id = ?",
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
// Verbo DELETE = Borrar categoria
categoria.delete("/categorias/:idCategoria", async (req, res) => {
  letvid = req.params.id;
  conex.query("DELETE FROM categorias where idCategoria = ?", id),
    (error, respuesta) => {
      if (error) {
        console.log(error);
      } else {
        res.status(201).send(respuesta);
      }
    };
});
module.exports = categoria;
