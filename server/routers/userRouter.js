//dependencies
const express = require('express');

//internal imports
const { userSignIn, userSignUp } = require('../controllers/usersController');

//initialise the Router
const Router = express.Router();

Router.get('/signin', userSignIn);
Router.get('/signup', userSignUp);

//export the router
module.exports = Router;
