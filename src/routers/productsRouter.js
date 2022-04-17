const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');



router.get('/', productsController.listProduct)

module.exports = router;