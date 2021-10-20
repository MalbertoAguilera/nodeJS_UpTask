const express = require("express");
const router = express.Router();

//importar express Validator
const { body } = require("express-validator");

//importar el controlador
const projectsController = require("../controllers/projectsController");

module.exports = function () {
  //ruta para el home
  //middleware de express
  //verbos post delete update get
  //'use' todos los verbos
  router.get("/", projectsController.homeProject);
  router.get("/new-project", projectsController.formProject);
  router.post("/new-Project",
      body('name').not().isEmpty().trim().escape(),
      projectsController.newProject);
  return router;
};
