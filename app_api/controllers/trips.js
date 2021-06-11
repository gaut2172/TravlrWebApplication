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

// POST: creates a single trip
const tripsAddTrip = async (req, res) => {
    model
        .create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        },
        (err, trip) => {
            if (err) {
                return res
                    .status(400)  // bad request, invalid content
                    .json(err);
            } else {
                return res
                    .status(201) // created
                    .json(trip);
            }
        })
}

// PUT: changes a single trip
const tripsUpdateTrip = async (req, res) => {
    console.log(req.body);
    model
        .findOneAndUpdate({ 'code': req.params.tripCode }, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, { new: true })
        .then(trip => {
            if (!trip) {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                });
            }
            res.send(trip);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            return res
                .status(500) // server error
                .json(err);
        });
}

module.exports = {
    tripsList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateTrip
};