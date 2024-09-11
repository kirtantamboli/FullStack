const express = require('express');
const router = express.Router();
const productcontroller =require('../controllers/productcontroller');
const Router = express.Router();

router.get('/api/v1/getproduct',productcontroller.getAllProduct)


module.exports = router;