const express = require('express') ;
const categoryController = require('../controller/categoryController')

const router = express.Router() ;

router.post('/createcategory',categoryController.createController);