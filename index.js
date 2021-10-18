//ARCHIVO DE CONFIGURACION
const express = require("express");
const routes = require('./routes');
//path lee el FileSystem LIBRERIA DE NODEJS
const path = require('path');
const bodyParser = require('body-parser');

//crear una aplicacion de express
const app = express();

//Donde caragar archivos estaticos
app.use(express.static('public'));

//habilitar pug
app.set('view engine', 'pug');

//añadir la carpeta de las vistas
//dirname retorna el directorio principal del FSystem
app.set('views', path.join(__dirname, './views'));

//Habilitar bodyParser para habilitar datos del formulario
//libreria de express
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());

app.listen(3000);
