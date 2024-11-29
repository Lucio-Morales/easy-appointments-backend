const userRoutes = require('./userRoutes');

const mainRoutes = require('express').Router();

mainRoutes.use('/user', userRoutes);

module.exports = mainRoutes;
