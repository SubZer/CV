const express = require('express');
const router = express.Router();
const mainController = require('../app/controller/MainController');


router.get('/', mainController.index);

module.exports = router;