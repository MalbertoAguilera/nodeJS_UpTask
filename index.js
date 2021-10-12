const express = require("express");
const routes = require('./routes');

//crear una aplicacion de express
const app = express();

app.use('/', routes());

app.listen(3000);
