exports.homeProject = (req, res) => {
  //render toma como parametro el nombre del html de pug
  res.render("index",{
    namePage : 'Proyectos'
  });
};

exports.formProject = (req, res) => {
  res.render('newProject', {
    namePage: 'Nuevo Proyecto'
  });
}

exports.newProject = (req, res) => {
  //Enviar a la consola
  console.log(req.body);
}
