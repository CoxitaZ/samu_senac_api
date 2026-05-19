const { Router } = require('express');
const usersController = require('./users/');
const tipoUsuarioController = require('./tipoUsuario/');
const noticiasDiariasController = require('./noticias_diarias/');

const routes = Router();


routes.use('/users', usersController);
routes.use('/tipo-usuario', tipoUsuarioController);
routes.use('/api/noticias', noticiasDiariasController);

module.exports = routes;
