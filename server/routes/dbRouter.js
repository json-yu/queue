const express = require('express');
const dbController = require('../controllers/dbController.js');
const router = express.Router();

router.get('/getWaitTimes', dbController.getWaitTimes, (req, res) => {
    res.sendStatus(200);
})

router.post('/postNewWaitTime', dbController.postNewWaitTime, (req, res) => {
    res.sendStatus(200);
})

module.exports = router;
