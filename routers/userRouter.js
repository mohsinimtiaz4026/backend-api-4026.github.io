const route = require('express').Router();
const userController = require('../controllers/userController');

route.post('/registerUser',userController.registerUser);

module.exports = route;