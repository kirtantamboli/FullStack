//express import 
const express = require('express') ;
const userController = require('../controllers/userController.js');
const passport = require('passport');
//express.Router()
const router = express.Router();

router.post('/register',userController.register) ;
router.post('/login',userController.login);
router.get('/auth/google',passport.authenticate('google',[{scope :['profile',email]}]))
module.exports = router ;

router.get('/auth/google/callback',passport.authenticate('google',failureRedirect))