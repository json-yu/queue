const express = require('express');
const geoRouter = express.Router();

const apiController = require('../controllers/apiController');

geoRouter.get('/', apiController.geolocation, (req, res) => res.sendStatus(200))

module.exports = geoRouter;