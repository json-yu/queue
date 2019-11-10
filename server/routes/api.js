const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.post('/', apiController.geolocation, apiController.yelp, (req, res, next) => {
  console.log('in the router')
  res.sendStatus(200);
});

module.exports = router;
