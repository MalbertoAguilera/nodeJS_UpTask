const express = require("express");
const routes = require('./routes');
//path lee el FileSystem LIBRERIA DE NODEJS
const path = require('path');

//crear una aplicacion de express
const app = express();

//habilitar pug
app.set('view engine', 'pug');

//añadir la carpeta de las vistas
//dirname retorna el directorio principal del FSystem
app.set('views', path.join(__dirname, './views'));

app.use('/', routes());

app.listen(3000);
