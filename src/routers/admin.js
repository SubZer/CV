const express = require('express');
const router = express.Router();
const adminController = require('../app/controller/AdminController');

router.get('/', adminController.index);

module.exports = router;    