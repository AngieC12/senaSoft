// puerta de entrada de la app  ::: PRINCIPIO SPR SINGLE RESPONSABILITY

const express = require("express");
const app = express(); //creamos nuestra aplicacion llamando el metodo constructor de express

app.use("/", require("./modules/usuarios")); //redirigimos al modulo usuarios
app.use("/", require("./modules/servicios")); //redirigimos al modulo servicio
app.use("/", require("./modules/municipios")); //redirigimso al modulo municipio
app.use("/", require("./modules/categorias")); //redirigimso al modulo categorias
app.use("/", require("./modules/asistencias")); //redirigimos al modulo asistencia
app.use("/", require("./modules/manzanas")); //redirigimos al modulo manzanas
app.use("/", require("./modules/establecimientos")); //redirigimos al modulo establecimientos
app.use("/", require("./modules/recuperarContra"));
//app.use("/", require("./modules/localizacion"));
app.use("/", require("./modules/validacionCorreo"));
//app.use("/", require("./modules/recuperacionContrasena"));
app.listen("3000", () => {
  console.log("Aplicacion ejecutandose en : http://localhost:3000");
});
