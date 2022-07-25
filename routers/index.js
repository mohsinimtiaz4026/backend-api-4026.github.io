const Router = require('express').Router();

Router.use('/user',require('./userRouter'));

module.exports = Router;