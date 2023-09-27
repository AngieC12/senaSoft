const express = require("express");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const bodyParser = require("body-parser");
const crypto = require("crypto");

const validacionCorreos = express();

validacionCorreos.use(bodyParser.urlencoded({ extended: false }));
validacionCorreos.use(bodyParser.json());

// Configura el transporte de nodemailer
const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "Gmail", // Cambia esto según tu proveedor de correo
    auth: {
      usuario: "tu_correo@gmail.com",
      contrasena: "tu_contraseña",
    },
  })
);

// Almacena correos no verificados en memoria (deberías usar una base de datos en un entorno real)
const unverifiedEmails = {};

// Ruta para enviar un correo de verificación
validacionCorreos.post("/send-verification-email", (req, res) => {
  const { email } = req.body;

  // Genera un token único para la verificación
  const token = crypto.randomBytes(20).toString("hex");
  unverifiedEmails[token] = email;

  // Construye el enlace de verificación
  const verificationLink = `http://localhost:3000/verify-email/${token}`;

  // Configura el correo electrónico
  const mailOptions = {
    from: "tu_correo@gmail.com",
    to: email,
    subject: "Verificación de correo electrónico",
    text: `Por favor, haga clic en el siguiente enlace para verificar su correo electrónico: ${verificationLink}`,
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error al enviar el correo de verificación");
    } else {
      console.log("Correo de verificación enviado: " + info.response);
      res.status(200).send("Correo de verificación enviado con éxito");
    }
  });
});

// Ruta para verificar el correo electrónico
validacionCorreos.get("/verify-email/:token", (req, res) => {
  const token = req.params.token;
  const email = unverifiedEmails[token];

  if (email) {
    // Elimina el token de la lista de no verificados
    delete unverifiedEmails[token];

    // Realiza alguna acción para marcar el correo electrónico como verificado en tu aplicación (por ejemplo, actualiza la base de datos)

    res.status(200).send("Correo electrónico verificado con éxito");
  } else {
    res.status(400).send("Token de verificación inválido");
  }
});

// Inicia el servidor en el puerto 3000
validacionCorreos.listen(4000, () => {
  console.log("Servidor en ejecución en http://localhost:3000");
});

module.exports = validacionCorreos;
