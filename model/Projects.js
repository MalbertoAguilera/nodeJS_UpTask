const Sequelize = require('sequelize');
const db = require('../config/db');
//dependencia para formatear URL
const slug = require('slug');

//definir el modelo

const Projects = db.define('projects', {
      id:{
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement:true
      },
      name: Sequelize.STRING,
      url: Sequelize.STRING  
}, {
      hooks: {
            beforeCreate(project){
                  console.log("Antes de insertar en una BD");
                  const url = slug(project.name).toLowerCase();
                  project.url = url;
            }
      }
});

module.exports = Projects;