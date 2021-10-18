const express = require('express');
const router = express.Router();

//importar el controlador
const projectsController = require('../controllers/projectsController');

module.exports = function(){

      //ruta para el home
      //middleware de express
      //verbos post delete update get
      //'use' todos los verbos
      router.get("/", projectsController.projectsHome);
      router.get("/nosotros", (req,res) => {
            res.render("Nosotros");
      });
      return router;
}
