const db = require('../models/models.js');

const dbController = {};

dbController.getWaitTimes = (req, res, next) => {

}

dbController.addVenue = async (req, res, next) => {
    const { venueId, venueName } = req.body;

    try {
        const queryStr = `
        INSERT INTO venues (VenueID, venue)
        VALUES ($1, $2)
        RETURNING *
        `;
        // const params = [ req.body.venueId, req.body.venueName ];
        const result = await db.query(queryStr, [ venueId, venueName ]);
        return next();
    }
    catch (err) {
        next({
            log: `dbController.addVenue: ERROR: ${err}`,
            message: { err: 'Error occurred in dbController.addVenue.' }
        });
    }
}

dbController.addWaitTime = async (req, res, next) => {
    // need to have url-loader installed to be able to read req.body
    console.log(req.body);
    const { waitTime, venueId } = req.body;
    // const waitTime = parseInt(req.body.WaitTime);
    // console.log(waitTime);
    try {
        const text = `
        INSERT INTO WaitTimes (WaitTime, VenueID)
        VALUES ($1, $2)
        RETURNING *
        `;
        const params = [ waitTime, venueId ];
        const result = await db.query(text, params);
        res.locals.results = result.rows[0];
        console.log(res.locals.results);
        return next();
    }
    catch (err) {
        next({
            log: `dbController.addWaitTime: ERROR: ${err}`,
            message: { err: 'Error occurred in dbController.addWaitTime.' }
        });
    }
}

module.exports = dbController;


