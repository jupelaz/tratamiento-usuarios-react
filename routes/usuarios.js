// Usuarios.js
const Controller = require('../controllers/UsuariosController');
const Router = require('express').Router();

Router
    .route('/')
    .get(Controller.findAll)
    .post(Controller.create);

Router
    .route('/:id')
    .get(Controller.findById)
    .put(Controller.update)
    .delete(Controller.remove);

module.exports = Router;