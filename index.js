const express = require("express");

//crear una aplicacion de express
const app = express();

const productos = [
  {
    producto: "libro",
    precio: 20,
  },
];

//ruta para el home
//middleware de express
//verbos post delete update get
//'use' todos los verbos
app.use("/", (request, response) => {
  response.json(productos);
});

app.listen(3000);
