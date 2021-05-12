var express = require('express');
var router = express.Router();
const controller = require('../controllers/news_controller');

/* GET news page. */
router.get('/', controller.news);

module.exports = router;
