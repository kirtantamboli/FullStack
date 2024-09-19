//express import 
const express = require('express') ;
const userController = require('../controllers/userController.js')
//express.Router()
const router = express.Router();

router.post('/register',userController.register) ;
router.post('/login',userController.login);

module.exports = router ;