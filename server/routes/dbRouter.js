const express = require('express');
const dbController = require('../controllers/dbController.js');
const router = express.Router();

router.post('/getWaitTimes', dbController.getWaitTimes, (req, res) => {
    console.log('successfully retrieved wait times')
    res.status(200).json(res.locals.results);
})

router.post('/addWaitTime', dbController.addVenue, dbController.addWaitTime, (req, res) => {
    console.log('successfully added venue and stored wait time')
    res.sendStatus(200);
})

module.exports = router;
