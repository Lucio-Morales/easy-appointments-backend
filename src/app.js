const express = require('express');
const cors = require('cors');
const mainRoutes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/', mainRoutes);

module.exports = app;
