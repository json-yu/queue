const express = require('express');
const dbController = require('../controllers/dbController.js');
const router = express.Router();

router.get('/getWaitTimes', dbController.getWaitTimes, (req, res) => {
    console.log('successfully retrieved wait times')
    res.sendStatus(200);
})

router.post('/addWaitTime', dbController.addVenue, dbController.addWaitTime, (req, res) => {
    console.log('successfully added venue and stored wait time')
    res.sendStatus(200);
})

module.exports = router;
