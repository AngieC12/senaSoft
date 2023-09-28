//modulo para usuarios

const express = require("express");
const cors = require("cors"); // para evitar restricciones entre llamadas de sitios
const mujeres = express.Router(); // trae el metodo router de express para hacer los endpoint  http://www.misitio.com/api/clients
const conex = require("./bddatos");
const bcrypt = require("bcryptjs");
//const multer = require("multer");
const secret = process.env.secret;
const jwt = require("jsonwebtoken");
const { promisify } = require("util"); //la trae por defecto node js me permite usar async/await opcion a fetch
//const url_permitida = "http://127.0.0.1:5500"; //evitar el error de politicas de cors

//middlewares requeridos
//middlewares: logica de intercambio entre las aplicaciones, traductor de datos entre aplicaciones distribuidas
mujeres.use(express.json()); //serializa la data en JSON
mujeres.use(cors());
mujeres.options("*", cors());

// construimos los endpoint
// listar todos usamos el GET
mujeres.get("/mujeres", async (req, res) => {
  try {
    await conex.query(
      "SELECT idmujeres,tipoDocumentol,nombreUno,nombreDos, apellidoUno, apellidoDos,telefonoMujer,correo,ciudad,direccionMujer,ocupacion,usuario,contrasena FROM mujeres",
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

//lista solo una mujer(id)
mujeres.get("/mujeres/:idmujeres", async (req, res) => {
  let id = req.params.id;
  try {
    conex.query(
      "SELECT tipoDocumentol,nombreUno,nombreDos, apellidoUno, apellidoDos,telefonoMujer,correo,ciudad,direccionMujer,ocupacion,usuario,contrasena  FROM mujeres where idmujeres = ?",
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
//insertar un usuario
mujeres.post("/mujeres/crear", async (req, res) => {
  try {
    let data = {
      idmujeres: req.body.idmujeres,
      tipoDocumentol: req.body.tipoDocumentol,
      nombreUno: req.body.nombreUno,
      nombreDos: req.body.nombreDos,
      apellidoUno: req.body.apellidoDos,
      apellidoDos: req.body.apellidoDos,
      telefonoMujer: req.body.telefonoMujer,
      correo: req.body.correo,
      ciudad: req.body.ciudad,
      direccionMujer: req.body.direccionMujer,
      ocupacion: req.body.ocupacion,
      usuario: req.body.usuario,
      contrasena: bcrypt.hashSync(req.body.contrasena, 7),
    };

    let consulta = await conex.query(
      "INSERT INTO mujeres SET ?",
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
//Login de usuario
mujeres.post("/mujeres/login", async (req, res) => {
  try {
    const correo = req.body.correo;
    const contrasena = req.body.contrasena;
    //    validamos que lleguen los datos completos
    if (!correo || !contrasena) {
      console.log("debe enviar los datos completos");
    } else {
      conex.query(
        "SELECT * FROM  where correo = ?",
        [correo],
        async (error, respuesta) => {
          if (
            respuesta.length == 0 ||
            !(await bcrypt.compare(contrasena, respuesta[0].contrasena))
          ) {
            /* res.send({
                estado: true,
                 valor: 100,
              }); */

            // res.sendStatus(200);

            res.send(false);
            console.log(
              "el usuario y/o la clave ingresada no existen en la aplicacion"
            );
          } else {
            // enviamos las variables al frontend para que cargue la pagina
            const token = jwt.sign(
              {
                idmujeres: respuesta[0].idmujeres,
              },
              secret,
              {
                expiresIn: "1d",
              }
            );
            res.send({
              token: token,
            });
            console.log("BIENVENIDO AL SISTEMA DE INFORMACION");
          }
        }
      );
    }
  } catch (error) {
    console.log("hay un error en la conexión con el server ");
  }
});
//editar
mujeres.put("/mujeres/:idmujeres", (req, res) => {
  let idmujeres = req.params.idmujeres;
  let datos = {
    tipoDocumentol: req.body.tipoDocumentol,
    nombreUno: req.body.nombreUno,
    nombreDos: req.body.nombreDos,
    apellidoUno: req.body.apellidoUno,
    apellidoDos: req.body.apellidoDos,
    telefonoMujer: req.body.telefonoMujer,
    correo: req.body.correo,
    ciudad: req.body.ciudad,
    direccionMujer: req.body.direccionMujer,
    ocupacion: req.body.ocupacion,
    usuario: req.body.usuario,
    contrasena: bcrypt.hashSync(req.body.contrasena, 7),
  };
  conex.query("UPDATE mujeres SET  ? where idmujeres = ?", [datos, idmujeres]),
    (error, respuesta) => {
      if (error) {
        console.log(error);
      } else {
        res.status(201);
        //  res.status(201).send(respuesta)
      }
    };
});
/* mujeres.put("/mujeres", async (req, res) => {
  try {
    let data = {
        tipoDocumentol: req.body.tipoDocumentol,
        nombreUno: req.body.nombreUno,
        nombreDos: req.body.nombreDos,
        apellidoUno: req.body.apellidoUno,
        apellidoDos: req.body.apellidoDos,
        telefonoMujer: req.body.telefonoMujer,
        correo: req.body.correo,
        ciudad: req.body.ciudad,
        direccionMujer: req.body.direccionMujer,
        ocupacion: req.body.ocupacion,
        usuario: req.body.usuario,
        contrasena: bcrypt.hashSync(req.body.contrasena, 7),
        foto: req.body.foto,
    };
    conex.query(
      "UPDATE usuario SET ? where id = ?",
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
}); */
//borrar

mujeres.delete("/mujeres/:idmujeres", (req, res) => {
  let idmujeres = req.params.idmujeres;
  let datos = {
    ntipoDocumentol: req.body.tipoDocumentol,
    nombreUno: req.body.nombreUno,
    nombreDos: req.body.nombreDos,
    apellidoUno: req.body.apellidoDos,
    telefonoMujer: req.body.telefonoMujer,
    correo: req.body.correo,
    ciudad: req.body.ciudad,
    direccionMujer: req.body.direccionMujer,
    ocupacion: req.body.ocupacion,
    usuario: req.body.usuario,
    contrasena: bcrypt.hashSync(req.body.contrasena, 7),
  };
  conex.query("DELETE FROM mujeres where idmujeres = ?", datos, idmujeres),
    (error, respuesta) => {
      if (error) {
        console.log(error);
      } else {
        //res.status(201)
        res.status(201).send(respuesta);
      }
    };
});

module.exports = mujeres;
