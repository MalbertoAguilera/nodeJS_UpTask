exports.projectsHome = (req, res) => {
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
