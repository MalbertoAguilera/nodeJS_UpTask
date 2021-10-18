exports.homeProject = (req, res) => {
  //render toma como parametro el nombre del html de pug
  res.render("index", {
    namePage: "Proyectos",
  });
};

exports.formProject = (req, res) => {
  res.render("newProject", {
    namePage: "Nuevo Proyecto",
  });
};

exports.newProject = (req, res) => {
  //Enviar a la consola
  // console.log(req.body);

  //validar el input
  const { nombre } = req.body;
  let errors = [];
  console.log(nombre);

  if (!nombre) {
    errors.push({ text: "Agrega un nombre al proyecto" });
  }

  //si hay errores
  if (errors.length) {
    res.render("newProject", {
      namePage: "NuevoProyecto",
      errors
    });
  } else{
    //insertar en una base de datos
  }
};
