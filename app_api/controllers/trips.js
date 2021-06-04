const mongoose = require('mongoose')
const model = mongoose.model('trips')
mongoose.set('debug', true);

// GET: /trips - lists all trips
const tripsList = async (req, res) => {
    model
        .find({})  // no parameter in find query returns all trips
        .exec((err, trips) => {
            // if no trips found, return error message
            if (!trips) {
                return res
                    .status(404)
                    .json({ "message": "Trip not found" });
            // else if error occurred in mongoose, return the error
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            // else the trips were found, so return OK code and trips
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        })
};

// GET: /trips/:tripCode - returns a single trip
const tripsFindCode = async (req, res) => {
    model
        .find({ 'code': req.params.tripCode })
        .exec((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({ "message": "Trip not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trip)
            }
        });
};

module.exports = {
    tripsList,
    tripsFindCode
};