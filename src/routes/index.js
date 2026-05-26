const { Router } = require('express');
const usersController = require('./users/');
const tipoUsuarioController = require('./tipousuario/');
const noticiasDiariasController = require('./noticias_diarias/');
const noticiasController = require('./noticias/');

const routes = Router();

routes.use('/users', usersController);
routes.use('/tipo-usuario', tipoUsuarioController);

// separar rotas 👇
routes.use('/api/noticias', noticiasController);
routes.use('/api/noticias-diarias', noticiasDiariasController);

module.exports = routes;