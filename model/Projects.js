const Sequelize = require('sequelize');
const db = require('../config/db');

//definir el modelo

const Projects = db.define('proyectos', {
      id:{
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement:true
      },
      name: Sequelize.STRING,
      url: Sequelize.STRING  
});

module.exports = Projects;