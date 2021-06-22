var express = require('express');
var router = express.Router();
const controller = require('../controllers/travel_controller');

/* GET travel page. */
router.get('/', controller.travelList);

module.exports = router;
