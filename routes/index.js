const express = require('express');
const router = express.Router();

module.exports = function(){

      //ruta para el home
      //middleware de express
      //verbos post delete update get
      //'use' todos los verbos
      router.get("/", (request, response) => {
        response.send('Index');
      });
      
      router.get('/nosotros', (request, response) => {
            response.send('Nosotros');
      })

      return router;
}
