const usuarios = require("./usuarios");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const { response } = require("express");
const express = require("express");
const recuperar = express.Router();

//require("dotenv").config();
const cors = require("cors");
recuperar.use(express.json()); //serializa la data en JSON
recuperar.use(cors());
recuperar.options("*", cors());

recuperar.post("/recuperarContra", async (req, res) => {
  if (req.body.correo) {
    res.status(400).send({
      message: "el correo es requerido",
    });
  }
  try {
    const usuario = await usuario.findOne({
      where: {
        correo: req.body.correo,
      },
    });
    if (!usuario) {
      return res.status(403).send({
        message: "correo no registrado",
      });
    }
    const token = jwt.sign(
      { idMujeres: usuario.idMujeres },
      "recuperarcontraseña",
      { expiresIn: "1h" }
    );
    usuario.update({
      tokenResetPassword: token,
    });

    const transporte = nodemailer.createTransport({
      service: "gmail",
      auth: {
        usuario: `${process.env.EMAIL_ADDRESS}`,
        contrasena: `${process.env.EMAIL_PASSWORD}`,
      },
    });
    const emailport = process.env.EMAIL_PORT || 3000;

    const mailOptions = {
      from: "bot.manzanasdelcuidado@gmail.com",
      to: `${usuario.correo}`,
      subject: "enlace para recuperar su cuenta de manzanas del cuidado ",
      Text: `${emailport}/resetcontrasena/${usuario.idMujeres}/${token}`,
    };
    transporte.sendMail(mailOptions, (error, response) => {
      if (error) {
        console.error("ha ocurrido un error", error);
      } else {
        console.log("respuesta:", response);
        res.status(200).json("el correo para la recuperacion ha sido enviado");
      }
    });
  } catch (error) {
    res.status(400).send({
      message: "ha ocurrido un error",
      error,
    });
  }
});

module.exports = recuperar;
