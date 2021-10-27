const Projects = require("../model/Projects");


exports.homeProject = async (req, res) => {
  const projects = await Projects.findAll();
  //render toma como parametro el nombre del html de pug
  res.render("index", {
    namePage: "Proyectos",
    projects
  });
};

exports.formProject = (req, res) => {
  res.render("newProject", {
    namePage: "Nuevo Proyecto",
  });
};

exports.newProject = async (req, res) => {
  //Enviar a la consola
  // console.log(req.body);

  //validar el input
  const { name } = req.body;
  let errors = [];
  console.log(name);

  if (!name) {
    errors.push({ text: "Agrega un nombre al proyecto" });
  }

  //si hay errores
  if (errors.length) {
    res.render("newProject", {
      namePage: "NuevoProyecto",
      errors,
    });
  } else {
    
    const project = await Projects.create({name, url});
    res.redirect('/');
      
  }
};
