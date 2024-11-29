const { userControllers } = require('../controllers');

const userRoutes = require('express').Router();

userRoutes
  .post('/register', userControllers.registerUser)
  .post('/login', userControllers.loginUser);

module.exports = userRoutes;
