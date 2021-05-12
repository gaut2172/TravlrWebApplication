var express = require('express');
var router = express.Router();
const controller = require('../controllers/meals_controller');

/* GET home page. */
router.get('/', controller.meals);

module.exports = router;
